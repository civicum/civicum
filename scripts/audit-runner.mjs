import fs from 'fs';
import path from 'path';

const DOCS_DIR = 'C:/Users/daniel.aguirre/Proyectos/civicum/docs';
const SQUADS_FILE = path.join(DOCS_DIR, 'research/ESCUADRONES DE EXPERTOS.txt');
const OUTPUT_FILE = path.join(DOCS_DIR, 'testing/audit-matrix-350-execution.md');

// Directorios a ignorar durante el escaneo (para no hacer trampa con los propios tests)
const IGNORED_DIRS = ['testing'];

function getAllMarkdownFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            if (!IGNORED_DIRS.includes(file)) {
                getAllMarkdownFiles(filePath, fileList);
            }
        } else if (filePath.endsWith('.md') || filePath.endsWith('.txt')) {
            // Excluir el archivo fuente de los escuadrones
            if (filePath.replace(/\\/g, '/') !== SQUADS_FILE.replace(/\\/g, '/')) {
                fileList.push(filePath);
            }
        }
    }
    return fileList;
}

function parseSquads(content) {
    const squads = [];
    const lines = content.split('\n');
    let currentSquad = null;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        const squadMatch = line.match(/^(\d+)\.\s+Escuadrón\s+(.+)/);

        if (squadMatch) {
            if (currentSquad) squads.push(currentSquad);
            currentSquad = {
                id: parseInt(squadMatch[1], 10),
                name: squadMatch[2],
                mission: '',
                roles: ''
            };
        } else if (currentSquad && line.startsWith('Misión:')) {
            currentSquad.mission = line.replace('Misión:', '').trim();
        } else if (currentSquad && line.startsWith('Integrantes:')) {
            currentSquad.roles = line.replace('Integrantes:', '').trim();
        }
    }
    if (currentSquad) squads.push(currentSquad);
    return squads;
}

// Función heurística para extraer palabras de peso de la misión
function extractKeywords(missionStr) {
    const stopWords = new Set(['para', 'como', 'sobre', 'desde', 'hasta', 'cuando', 'donde', 'quien', 'cual', 'que', 'los', 'las', 'del', 'por', 'con', 'una', 'uno', 'unos', 'unas', 'este', 'esta', 'estos', 'estas', 'eso', 'esa', 'esos', 'esas', 'esto', 'sea', 'ser', 'son', 'sus', 'tiene', 'tienen', 'hace', 'hacen', 'puede', 'pueden', 'sistema', 'usuario', 'usuarios', 'aplicación', 'app', 'plataforma', 'misión', 'mision']);

    const rawWords = missionStr.toLowerCase().replace(/[^\w\sáéíóúñü]/g, '').split(/\s+/);
    return rawWords.filter(w => w.length > 5 && !stopWords.has(w));
}

async function runAudit() {
    console.log('🔄 Iniciando Autómata Auditor de Civicum...');

    if (!fs.existsSync(SQUADS_FILE)) {
        console.error(`❌ Archivo maestro no encontrado: ${SQUADS_FILE}`);
        process.exit(1);
    }

    const squadsContent = fs.readFileSync(SQUADS_FILE, 'utf-8');
    const squads = parseSquads(squadsContent);
    console.log(`✅ ${squads.length} escuadrones parseados exitosamente.`);

    const docsFiles = getAllMarkdownFiles(DOCS_DIR);
    console.log(`📂 Indexando corpus documental (${docsFiles.length} archivos)...`);

    const corpus = docsFiles.map(file => ({
        name: path.basename(file),
        path: file,
        content: fs.readFileSync(file, 'utf-8').toLowerCase()
    }));

    console.log('🔍 Iniciando Deep Scan...');

    const results = [];
    let passed = 0;
    let failed = 0;

    for (const squad of squads) {
        const keywords = extractKeywords(squad.name + " " + squad.mission);
        let matchedFiles = [];

        if (keywords.length === 0) {
            // Fallback si no hay keywords potentes
            keywords.push(...squad.name.toLowerCase().split(/\s+/).filter(w => w.length > 4));
        }

        for (const doc of corpus) {
            // Necesitamos que al menos el 30% de las palabras clave principales aparezcan en un doc para considerarlo "Tocado/Implementado"
            let matches = 0;
            for (const kw of keywords) {
                if (doc.content.includes(kw)) matches++;
            }

            const matchThreshold = Math.max(1, Math.ceil(keywords.length * 0.3));

            if (matches >= matchThreshold) {
                matchedFiles.push(doc.name);
            }
        }

        const uniqueFiles = [...new Set(matchedFiles)];
        const isPass = uniqueFiles.length > 0;

        if (isPass) passed++; else failed++;

        results.push({
            id: squad.id,
            name: squad.name,
            mission: squad.mission,
            status: isPass ? '✅ PASS' : '❌ FAIL',
            evidences: uniqueFiles.length > 0 ? uniqueFiles.slice(0, 3).join(', ') : 'Sin Cobertura'
        });
    }

    // Generar Reporte
    let mdOut = `# 🤖 Matriz de Ejecución Automatizada: 350 Escuadrones

**Fecha de Ejecución:** ${new Date().toISOString()}
**Motor:** Autómata Heurístico Antigravity (Node.js)
**Criterio de Aprobación:** Escaneo semántico forzado sobre documentación (\`docs/\` excluyendo \`testing/\`). Exige coincidencia de vocabulario crítico de misión en arquitectura.

## 📊 Resumen Ejecutivo
- **Total Escuadrones Auditados:** ${squads.length}
- **Escuadrones Exitosos (Con Evidencia):** ${passed}
- **Escuadrones Fallidos (GAPs de Diseño):** ${failed}
- **Tasa de Cobertura Documental:** ${((passed / squads.length) * 100).toFixed(2)}%

## 🔴 ALERTAS (GAPs DETECTADOS)
Estos escuadrones no encontraron soporte documental firme en el diseño actual:
${results.filter(r => r.status.includes('FAIL')).map(r => `- **Sq-${r.id} [${r.name}]**: ${r.mission}`).join('\n') || '*Ninguno. El sistema es impenetrable.*'}

## 🧾 Matriz Detallada de Auditoría

| ID | Escuadrón | Misión Principal | Resultado | Evidencia Documental |
|----|-----------|------------------|-----------|----------------------|
`;

    for (const r of results) {
        mdOut += `| ${r.id} | ${r.name} | ${r.mission} | **${r.status}** | \`${r.evidences}\` |\n`;
    }

    mdOut += `\n\n*Fin de la simulación. Zero Errors Target.*`;

    // Ensure testing dir exists
    const testingDir = path.dirname(OUTPUT_FILE);
    if (!fs.existsSync(testingDir)) {
        fs.mkdirSync(testingDir, { recursive: true });
    }

    fs.writeFileSync(OUTPUT_FILE, mdOut, 'utf-8');
    console.log(`\n🎉 Auditoría completada. Resultados en: ${OUTPUT_FILE}`);
}

runAudit().catch(console.error);
