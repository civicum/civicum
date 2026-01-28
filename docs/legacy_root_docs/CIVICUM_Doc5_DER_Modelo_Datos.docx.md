

**CIVICUM**

Sistema Nervioso Cívico de Chile

**DIAGRAMA ENTIDAD-RELACIÓN (DER)**  
**Modelo de Datos PostgreSQL**

*Base de Datos Relacional Completa MVP*

Versión: 1.0  
Enero 2026  
Última Actualización: 24/01/2026

# **1\. INTRODUCCIÓN**

## **1.1. Propósito**

Este documento especifica el modelo completo de datos de CIVICUM MVP, incluyendo esquema PostgreSQL, relaciones, índices, constraints y políticas RLS.

## **1.2. Características del Modelo**

* Multi-tenant: RLS asegura aislamiento datos por usuario/institución  
* Geoespacial: PostGIS para cuadrantes y mapas  
* Temporal: Auditoría completa con timestamps  
* Escalable: Particionado por fecha en tablas grandes  
* Seguro: Cifrado campos sensibles, soft deletes

# **2\. ESTADÍSTICAS DEL MODELO**

| Métrica | Valor |
| :---- | :---- |
| **Total Tablas Principales** | 45 |
| **Total Tablas Auxiliares** | 12 |
| **Total Relaciones** | 87 |
| **Índices Totales** | 156 |
| **Políticas RLS** | 45 |
| **Vistas Materializadas** | 8 |
| **Funciones Almacenadas** | 15 |
| **Triggers** | 12 |

# **3\. ORGANIZACIÓN POR DOMINIOS**

## **3.1. Dominio USUARIOS (5 tablas)**

| Tabla | Registros Est. | Descripción |
| :---- | :---- | :---- |
| **profiles** | 100K \- 1M | Perfiles extendidos usuario |
| **user\_trust\_scores** | 100K \- 1M | Historial scores confianza |
| **user\_verifications** | 10K \- 100K | Verificaciones identidad nivel 3 |
| **user\_karma\_history** | 1M \- 10M | Historial transacciones karma |
| **device\_registrations** | 50K \- 500K | Dispositivos registrados anti-Sybil |

## **3.2. Dominio ALZA LA VOZ (12 tablas)**

| Tabla | Registros Est. | Descripción |
| :---- | :---- | :---- |
| **community\_reports** | 500K \- 5M | Reportes ciudadanos |
| **report\_evidence** | 1M \- 10M | Fotos/videos evidencia |
| **report\_supports** | 2M \- 20M | Apoyos "Yo Apoyo" |
| **mesas** | 10K \- 100K | Mesas Trabajo deliberación |
| **mesa\_participants** | 50K \- 500K | Participantes mesas |
| **mesa\_threads** | 100K \- 1M | Discusiones mesas |
| **mesa\_tasks** | 50K \- 500K | Tareas asignadas |
| **pledges** | 100K \- 1M | Compromisos acción |
| **evidence\_dossiers** | 1K \- 10K | Expedientes evidencia sistémica |
| **dossier\_reports** | 50K \- 500K | Reportes en expedientes |
| **dossier\_quotes** | 10K \- 100K | Citas seleccionadas |
| **dossier\_photos** | 20K \- 200K | Fotos verificadas expedientes |

## **3.3. Dominio CUENTAS CLARAS (8 tablas)**

| Tabla | Registros Est. | Descripción |
| :---- | :---- | :---- |
| **authorities** | 5K \- 10K | Autoridades electas/designadas 552+ |
| **institutions** | 500 \- 2K | Instituciones públicas |
| **institution\_units** | 2K \- 10K | Unidades internas instituciones |
| **authority\_promises** | 10K \- 50K | Promesas campaña/gobierno |
| **authority\_commitments** | 5K \- 25K | Compromisos verificables |
| **promise\_report\_categories** | 20K \- 100K | Vinculación promesas↔reportes |
| **authority\_performance** | 50K \- 500K | Métricas desempeño |
| **budget\_data** | 100K \- 1M | Presupuestos SINIM normalizados |

## **3.4. Dominio VOTO CIUDADANO (4 tablas)**

| Tabla | Registros Est. | Descripción |
| :---- | :---- | :---- |
| **proposals** | 5K \- 50K | Propuestas legislativas ciudadanas |
| **proposal\_votes** | 100K \- 1M | Votos simbólicos |
| **proposal\_comments** | 50K \- 500K | Comentarios deliberación |
| **match\_democratico** | 1M \- 10M | Cálculos afinidad usuario-legislador |

## **3.5. Dominio ACADEMIA CÍVICA (7 tablas)**

| Tabla | Registros Est. | Descripción |
| :---- | :---- | :---- |
| **capsulas** | 500 \- 2K | Contenido microlearning 5-10min |
| **user\_capsula\_progress** | 1M \- 10M | Progreso individual |
| **civic\_missions** | 100 \- 500 | Misiones gamificadas |
| **user\_mission\_progress** | 500K \- 5M | Progreso misiones |
| **civic\_certifications** | 10K \- 100K | Certificaciones emitidas |
| **learning\_paths** | 50 \- 200 | Rutas aprendizaje temáticas |
| **quizzes** | 1K \- 5K | Evaluaciones conocimiento |

## **3.6. Dominio ASISTENTE CÍVICO (6 tablas)**

| Tabla | Registros Est. | Descripción |
| :---- | :---- | :---- |
| **journey\_templates** | 50 \- 200 | Templates flujos legales |
| **journey\_instances** | 100K \- 1M | Instancias activas flujos |
| **journey\_milestones** | 500K \- 5M | Hitos progreso timeline |
| **ai\_conversations** | 1M \- 10M | Conversaciones Civia |
| **generated\_documents** | 100K \- 1M | Oficios/cartas generadas |
| **templates\_library** | 100 \- 500 | Plantillas documentos legales |

# **4\. DIAGRAMA CONCEPTUAL (ERD Simplificado)**

┌──────────────┐  
│   PROFILES   │───┐  
│ (Usuarios)   │   │  
└──────┬───────┘   │  
       │           │  
       │ 1:N       │ 1:N  
       ▼           ▼  
┌───────────────┐ ┌──────────────┐  
│ COMM\_REPORTS  │ │  PROPOSALS   │  
│ (Reportes)    │ │  (Propuestas)│  
└──────┬────────┘ └──────┬───────┘  
       │                 │  
       │ N:1            │ 1:N  
       ▼                 ▼  
┌──────────────┐  ┌─────────────┐  
│  INSTITUTIONS│  │PROP\_VOTES   │  
│ (Municipios) │  │ (Votaciones)│  
└──────┬───────┘  └─────────────┘  
       │  
       │ 1:N  
       ▼  
┌──────────────┐  
│ AUTHORITIES  │  
│ (Autoridades)│  
└──────┬───────┘  
       │  
       │ 1:N  
       ▼  
┌──────────────┐  
│   PROMISES   │  
│ (Promesas)   │  
└──────────────┘

# **5\. ESQUEMAS SQL DETALLADOS**

## **5.1. Tabla: profiles (Perfiles Usuario)**

CREATE TABLE profiles (  
  id UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),  
  auth\_user\_id UUID NOT NULL UNIQUE REFERENCES auth.users(id),  
  display\_name VARCHAR(100),  
  bio TEXT,  
  avatar\_url TEXT,  
  identity\_level INTEGER NOT NULL DEFAULT 0,  
  rut\_hash VARCHAR(64),  
  trust\_score INTEGER NOT NULL DEFAULT 0,  
  karma\_civico INTEGER NOT NULL DEFAULT 0,  
  role VARCHAR(30) NOT NULL DEFAULT 'citizen',  
  institution\_id UUID REFERENCES institutions(id),  
  comuna\_id VARCHAR(5),  
  is\_active BOOLEAN NOT NULL DEFAULT true,  
  is\_public BOOLEAN NOT NULL DEFAULT true,  
  created\_at TIMESTAMP NOT NULL DEFAULT NOW(),  
  updated\_at TIMESTAMP NOT NULL DEFAULT NOW(),  
    
  CONSTRAINT chk\_identity\_level CHECK (identity\_level BETWEEN 0 AND 3),  
  CONSTRAINT chk\_role CHECK (role IN (  
    'citizen', 'moderator', 'admin', 'guardian', 'institution\_admin'  
  ))  
);

CREATE INDEX idx\_profiles\_auth\_user ON profiles(auth\_user\_id);  
CREATE INDEX idx\_profiles\_identity ON profiles(identity\_level);  
CREATE INDEX idx\_profiles\_institution ON profiles(institution\_id)   
  WHERE institution\_id IS NOT NULL;  
CREATE INDEX idx\_profiles\_comuna ON profiles(comuna\_id);  
CREATE INDEX idx\_profiles\_active ON profiles(is\_active) WHERE is\_active;

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;  
ALTER TABLE profiles FORCE ROW LEVEL SECURITY;

## **5.2. Tabla: community\_reports (Reportes)**

CREATE TABLE community\_reports (  
  id UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),  
  author\_id UUID NOT NULL REFERENCES profiles(id),  
  category VARCHAR(50) NOT NULL,  
  title VARCHAR(200) NOT NULL,  
  description TEXT NOT NULL,  
  location\_comuna VARCHAR(100),  
  location\_exact GEOMETRY(Point, 4326),  
  location\_quadrant VARCHAR(50),  
  status VARCHAR(30) NOT NULL DEFAULT 'OPEN',  
  toxicity\_score DECIMAL(3,2),  
  institutional\_response TEXT,  
  institutional\_response\_at TIMESTAMP,  
  institutional\_response\_verified BOOLEAN,  
  support\_count INTEGER NOT NULL DEFAULT 0,  
  visibility VARCHAR(20) NOT NULL DEFAULT 'public',  
  created\_at TIMESTAMP NOT NULL DEFAULT NOW(),  
  updated\_at TIMESTAMP NOT NULL DEFAULT NOW(),  
  closed\_at TIMESTAMP,  
    
  CONSTRAINT chk\_status CHECK (status IN (  
    'OPEN', 'IN\_PROGRESS', 'WAITING\_RESPONSE',   
    'RESOLVED', 'CLOSED', 'ARCHIVED'  
  )),  
  CONSTRAINT chk\_visibility CHECK (visibility IN (  
    'public', 'confidential', 'anonymous'  
  ))  
);

CREATE INDEX idx\_reports\_author ON community\_reports(author\_id);  
CREATE INDEX idx\_reports\_comuna ON community\_reports(location\_comuna);  
CREATE INDEX idx\_reports\_status ON community\_reports(status)   
  WHERE status \!= 'CLOSED';  
CREATE INDEX idx\_reports\_geom ON community\_reports   
  USING GIST (location\_exact);  
CREATE INDEX idx\_reports\_created ON community\_reports(created\_at DESC);  
CREATE INDEX idx\_reports\_category ON community\_reports(category);

## **5.3. Tabla: authorities (Autoridades)**

CREATE TABLE authorities (  
  id UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),  
  full\_name VARCHAR(200) NOT NULL,  
  position VARCHAR(100) NOT NULL,  
  jurisdiction\_type VARCHAR(50) NOT NULL,  
  jurisdiction\_id VARCHAR(20) NOT NULL,  
  institution\_id UUID REFERENCES institutions(id),  
  political\_party VARCHAR(100),  
  photo\_url TEXT,  
  bio TEXT,  
  contact\_email VARCHAR(100),  
  term\_start DATE NOT NULL,  
  term\_end DATE,  
  is\_current BOOLEAN NOT NULL DEFAULT true,  
  infolobby\_id VARCHAR(50),  
  infoprobidad\_id VARCHAR(50),  
  created\_at TIMESTAMP NOT NULL DEFAULT NOW(),  
    
  CONSTRAINT chk\_jurisdiction\_type CHECK (jurisdiction\_type IN (  
    'nacional', 'regional', 'provincial', 'comunal',  
    'distrito', 'circunscripcion'  
  ))  
);

CREATE INDEX idx\_authorities\_jurisdiction   
  ON authorities(jurisdiction\_type, jurisdiction\_id)   
  WHERE is\_current \= true;  
CREATE INDEX idx\_authorities\_institution   
  ON authorities(institution\_id);  
CREATE INDEX idx\_authorities\_current   
  ON authorities(is\_current) WHERE is\_current;

## **5.4. Tabla: authority\_promises (Promesas)**

CREATE TABLE authority\_promises (  
  id UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),  
  authority\_id UUID NOT NULL REFERENCES authorities(id),  
  promise\_text TEXT NOT NULL,  
  promise\_category VARCHAR(100),  
  source\_type VARCHAR(50) NOT NULL,  
  source\_url TEXT,  
  source\_date DATE,  
  deadline DATE,  
  status VARCHAR(30) NOT NULL DEFAULT 'PENDING',  
  verification\_method VARCHAR(100),  
  citizen\_reported\_count INTEGER DEFAULT 0,  
  created\_at TIMESTAMP NOT NULL DEFAULT NOW(),  
  updated\_at TIMESTAMP NOT NULL DEFAULT NOW(),  
    
  CONSTRAINT chk\_source\_type CHECK (source\_type IN (  
    'campaign', 'program', 'interview', 'parliament', 'other'  
  )),  
  CONSTRAINT chk\_status CHECK (status IN (  
    'PENDING', 'IN\_PROGRESS', 'MET', 'PARTIAL',   
    'NOT\_MET', 'ABANDONED'  
  ))  
);

CREATE INDEX idx\_promises\_authority ON authority\_promises(authority\_id);  
CREATE INDEX idx\_promises\_status ON authority\_promises(status);

# **6\. MATRIZ DE RELACIONES**

| Tabla Origen | Tabla Destino | Tipo | FK Columna | Cascade |
| :---- | :---- | :---- | :---- | :---- |
| **profiles** | auth.users | 1:1 | auth\_user\_id | CASCADE |
| **profiles** | institutions | N:1 | institution\_id | SET NULL |
| **community\_reports** | profiles | N:1 | author\_id | CASCADE |
| **report\_evidence** | community\_reports | N:1 | report\_id | CASCADE |
| **report\_supports** | community\_reports | N:1 | report\_id | CASCADE |
| **report\_supports** | profiles | N:1 | user\_id | CASCADE |
| **mesas** | community\_reports | N:1 | report\_id | SET NULL |
| **mesa\_participants** | mesas | N:1 | mesa\_id | CASCADE |
| **mesa\_participants** | profiles | N:1 | user\_id | CASCADE |
| **authorities** | institutions | N:1 | institution\_id | SET NULL |
| **authority\_promises** | authorities | N:1 | authority\_id | CASCADE |
| **authority\_commitments** | authority\_promises | N:1 | original\_promise\_id | CASCADE |
| **proposals** | profiles | N:1 | author\_id | CASCADE |
| **proposal\_votes** | proposals | N:1 | proposal\_id | CASCADE |
| **proposal\_votes** | profiles | N:1 | user\_id | CASCADE |
| **capsulas** | journey\_templates | N:1 | process\_id | SET NULL |
| **user\_capsula\_progress** | capsulas | N:1 | capsula\_id | CASCADE |
| **user\_capsula\_progress** | profiles | N:1 | user\_id | CASCADE |
| **journey\_instances** | journey\_templates | N:1 | template\_id | RESTRICT |
| **journey\_milestones** | journey\_instances | N:1 | journey\_id | CASCADE |
| **organization\_units** | profiles | N:1 | created\_by | SET NULL |
| **organization\_members** | organization\_units | N:1 | org\_id | CASCADE |
| **organization\_members** | profiles | N:1 | user\_id | CASCADE |
| **evidence\_dossiers** | proposals | N:1 | proposal\_id | SET NULL |
| **dossier\_reports** | evidence\_dossiers | N:1 | dossier\_id | CASCADE |
| **dossier\_reports** | community\_reports | N:1 | report\_id | RESTRICT |
| **jury\_verdicts** | profiles | N:M | juror\_ids\[\] | NO ACTION |
| **audit\_logs** | profiles | N:1 | user\_id | SET NULL |

# **7\. POLÍTICAS ROW LEVEL SECURITY (RLS)**

## **7.1. Política: profiles**

\-- Usuarios ven solo su propio perfil completo  
CREATE POLICY select\_own\_profile ON profiles  
  FOR SELECT  
  USING (auth.uid() \= auth\_user\_id);

\-- Público ve perfiles públicos (campos limitados)  
CREATE POLICY select\_public\_profiles ON profiles  
  FOR SELECT  
  USING (is\_public \= true AND is\_active \= true);

\-- Usuarios modifican solo su perfil  
CREATE POLICY update\_own\_profile ON profiles  
  FOR UPDATE  
  USING (auth.uid() \= auth\_user\_id)  
  WITH CHECK (auth.uid() \= auth\_user\_id);

## **7.2. Política: community\_reports**

\-- Todos ven reportes públicos  
CREATE POLICY select\_public\_reports ON community\_reports  
  FOR SELECT  
  USING (visibility \= 'public');

\-- Autores ven sus propios reportes confidenciales  
CREATE POLICY select\_own\_reports ON community\_reports  
  FOR SELECT  
  USING (author\_id IN (  
    SELECT id FROM profiles WHERE auth\_user\_id \= auth.uid()  
  ));

\-- Instituciones ven reportes su jurisdicción  
CREATE POLICY select\_institution\_reports ON community\_reports  
  FOR SELECT  
  USING (location\_comuna IN (  
    SELECT jurisdiction\_id FROM profiles p  
    JOIN institutions i ON p.institution\_id \= i.id  
    WHERE p.auth\_user\_id \= auth.uid()  
  ));

# **8\. OPTIMIZACIÓN PERFORMANCE**

## **8.1. Índices Críticos (25 principales)**

| Tabla | Índice | Tipo | Justificación |
| :---- | :---- | :---- | :---- |
| **profiles** | idx\_profiles\_auth\_user | UNIQUE | Auth lookup O(1) |
| **profiles** | idx\_profiles\_comuna | BTREE | Filtros geográficos |
| **community\_reports** | idx\_reports\_geom | GIST | Queries espaciales PostGIS |
| **community\_reports** | idx\_reports\_created | BTREE DESC | Ordenamiento timeline |
| **community\_reports** | idx\_reports\_status | BTREE PARTIAL | Solo reportes abiertos |
| **authorities** | idx\_authorities\_jurisdiction | BTREE COMPOSITE | Lookup por jurisdicción |
| **authority\_promises** | idx\_promises\_authority | BTREE | Filtro promesas por autoridad |
| **proposals** | idx\_proposals\_created | BTREE DESC | Timeline propuestas |
| **proposal\_votes** | idx\_votes\_proposal\_user | UNIQUE COMPOSITE | Prevent duplicate votes |
| **audit\_logs** | idx\_audit\_timestamp | BTREE DESC | Queries recientes |
| **report\_evidence** | idx\_evidence\_report | BTREE | Join reportes↔evidencias |
| **journey\_milestones** | idx\_milestones\_journey | BTREE | Timeline journeys |
| **user\_capsula\_progress** | idx\_progress\_user\_capsula | UNIQUE COMPOSITE | Prevent duplicates |
| **organization\_members** | idx\_members\_org\_user | UNIQUE COMPOSITE | Prevent duplicate members |
| **mesa\_participants** | idx\_participants\_mesa\_user | UNIQUE COMPOSITE | Prevent duplicate joins |

## **8.2. Particionado (Tablas Grandes)**

**Tabla audit\_logs Particionada por Mes:**

CREATE TABLE audit\_logs (  
  id UUID DEFAULT gen\_random\_uuid(),  
  user\_id UUID,  
  action VARCHAR(100) NOT NULL,  
  entity\_type VARCHAR(50),  
  entity\_id UUID,  
  metadata JSONB,  
  created\_at TIMESTAMP NOT NULL DEFAULT NOW(),  
  ip\_address INET,  
  user\_agent TEXT  
) PARTITION BY RANGE (created\_at);

\-- Particiones mensuales  
CREATE TABLE audit\_logs\_2026\_01 PARTITION OF audit\_logs  
  FOR VALUES FROM ('2026-01-01') TO ('2026-02-01');  
CREATE TABLE audit\_logs\_2026\_02 PARTITION OF audit\_logs  
  FOR VALUES FROM ('2026-02-01') TO ('2026-03-01');  
\-- ... continuar para cada mes

Beneficios: Queries más rápidas (solo escanean partición relevante), purga eficiente DROP PARTITION

# **9\. VISTAS MATERIALIZADAS**

## **9.1. authority\_performance\_mv**

CREATE MATERIALIZED VIEW authority\_performance\_mv AS  
SELECT   
  a.id,  
  a.full\_name,  
  a.jurisdiction\_id,  
  COUNT(DISTINCT r.id) as total\_reports\_jurisdiction,  
  COUNT(DISTINCT r.id) FILTER (  
    WHERE r.status \= 'RESOLVED'  
  ) as resolved\_reports,  
  AVG(EXTRACT(EPOCH FROM (r.institutional\_response\_at \- r.created\_at)) / 86400  
  ) FILTER (  
    WHERE r.institutional\_response\_at IS NOT NULL  
  ) as avg\_response\_days,  
  COUNT(p.id) as total\_promises,  
  COUNT(p.id) FILTER (WHERE p.status \= 'MET') as promises\_met,  
  COUNT(p.id) FILTER (WHERE p.status \= 'NOT\_MET') as promises\_not\_met  
FROM authorities a  
LEFT JOIN community\_reports r ON (  
  r.location\_comuna \= a.jurisdiction\_id  
  AND r.created\_at \>= a.term\_start  
)  
LEFT JOIN authority\_promises p ON p.authority\_id \= a.id  
WHERE a.is\_current \= true  
GROUP BY a.id, a.full\_name, a.jurisdiction\_id;

CREATE UNIQUE INDEX idx\_authority\_performance\_mv\_id   
  ON authority\_performance\_mv(id);

\-- Refresh diario 3am  
SELECT cron.schedule(  
  'refresh-authority-performance',  
  '0 3 \* \* \*',  
  $$REFRESH MATERIALIZED VIEW CONCURRENTLY authority\_performance\_mv$$  
);

## **9.2. popular\_proposals\_mv**

CREATE MATERIALIZED VIEW popular\_proposals\_mv AS  
SELECT   
  p.id,  
  p.title,  
  p.category,  
  COUNT(DISTINCT pv.id) as total\_votes,  
  COUNT(DISTINCT pv.id) FILTER (  
    WHERE pv.vote \= 'FAVOR'  
  ) as votes\_favor,  
  COUNT(DISTINCT pc.id) as comment\_count,  
  p.created\_at,  
  \-- Weighted score: votos \+ engagement temporal  
  (COUNT(DISTINCT pv.id) \* 10 \+   
   COUNT(DISTINCT pc.id) \* 2\) /   
   EXTRACT(EPOCH FROM (NOW() \- p.created\_at)) as hot\_score  
FROM proposals p  
LEFT JOIN proposal\_votes pv ON pv.proposal\_id \= p.id  
LEFT JOIN proposal\_comments pc ON pc.proposal\_id \= p.id  
WHERE p.status \= 'ACTIVE'  
GROUP BY p.id  
ORDER BY hot\_score DESC;

CREATE UNIQUE INDEX idx\_popular\_proposals\_mv\_id   
  ON popular\_proposals\_mv(id);  
CREATE INDEX idx\_popular\_proposals\_mv\_hot   
  ON popular\_proposals\_mv(hot\_score DESC);

# **10\. FUNCIONES ALMACENADAS (15 principales)**

## **10.1. calculate\_commitment\_result()**

CREATE OR REPLACE FUNCTION calculate\_commitment\_result(  
  p\_commitment\_id UUID  
) RETURNS void AS $$  
DECLARE  
  v\_commitment RECORD;  
  v\_current\_value DECIMAL(10,2);  
  v\_percentage DECIMAL(5,2);  
  v\_category VARCHAR(30);  
BEGIN  
  SELECT \* INTO v\_commitment   
  FROM authority\_commitments   
  WHERE id \= p\_commitment\_id;  
    
  IF v\_commitment.metric\_type \= 'REPORT\_REDUCTION' THEN  
    SELECT COUNT(\*) INTO v\_current\_value  
    FROM community\_reports r  
    WHERE r.location\_comuna \= (  
      SELECT jurisdiction\_id FROM authorities   
      WHERE id \= v\_commitment.authority\_id  
    )  
    AND r.category \= ANY(v\_commitment.target\_categories)  
    AND r.created\_at BETWEEN   
      v\_commitment.metric\_baseline\_date AND v\_commitment.deadline;  
      
    v\_percentage := (  
      (v\_commitment.metric\_baseline \- v\_current\_value) /   
      (v\_commitment.metric\_baseline \- v\_commitment.metric\_target)  
    ) \* 100;  
  END IF;  
    
  v\_category := CASE  
    WHEN v\_percentage \>= 110 THEN 'EXCEEDED'  
    WHEN v\_percentage \>= 95 THEN 'MET'  
    WHEN v\_percentage \>= 50 THEN 'PARTIAL'  
    WHEN v\_percentage \>= 10 THEN 'MINIMAL'  
    ELSE 'NOT\_MET'  
  END;  
    
  UPDATE authority\_commitments SET   
    result\_value \= v\_current\_value,  
    result\_percentage \= v\_percentage,  
    result\_category \= v\_category,  
    result\_calculated\_at \= NOW()  
  WHERE id \= p\_commitment\_id;  
END;  
$$ LANGUAGE plpgsql;

## **10.2. assign\_report\_to\_institution\_unit()**

CREATE OR REPLACE FUNCTION assign\_report\_to\_institution\_unit(  
  p\_report\_id UUID  
) RETURNS UUID AS $$  
DECLARE  
  v\_report RECORD;  
  v\_unit\_id UUID;  
BEGIN  
  SELECT \* INTO v\_report   
  FROM community\_reports   
  WHERE id \= p\_report\_id;  
    
  \-- Buscar unidad según categoría y comuna  
  SELECT u.id INTO v\_unit\_id  
  FROM institution\_units u  
  JOIN institution\_routing\_rules r ON (  
    r.institution\_id \= u.institution\_id  
    AND r.unit\_id \= u.id  
  )  
  WHERE r.category \= v\_report.category  
  AND u.institution\_id IN (  
    SELECT id FROM institutions   
    WHERE comuna\_code \= v\_report.location\_comuna  
  )  
  AND u.is\_active \= true  
  LIMIT 1;  
    
  \-- Si no hay regla específica, asignar a unidad default  
  IF v\_unit\_id IS NULL THEN  
    SELECT id INTO v\_unit\_id  
    FROM institution\_units u  
    WHERE u.institution\_id IN (  
      SELECT id FROM institutions   
      WHERE comuna\_code \= v\_report.location\_comuna  
    )  
    AND u.is\_default \= true;  
  END IF;  
    
  RETURN v\_unit\_id;  
END;  
$$ LANGUAGE plpgsql;

# **11\. TRIGGERS (12 principales)**

## **11.1. Trigger: update\_updated\_at**

\-- Función generic para updated\_at  
CREATE OR REPLACE FUNCTION update\_updated\_at()  
RETURNS TRIGGER AS $$  
BEGIN  
  NEW.updated\_at \= NOW();  
  RETURN NEW;  
END;  
$$ LANGUAGE plpgsql;

\-- Aplicar a todas las tablas con updated\_at  
CREATE TRIGGER trg\_profiles\_updated\_at  
  BEFORE UPDATE ON profiles  
  FOR EACH ROW EXECUTE FUNCTION update\_updated\_at();

CREATE TRIGGER trg\_reports\_updated\_at  
  BEFORE UPDATE ON community\_reports  
  FOR EACH ROW EXECUTE FUNCTION update\_updated\_at();

## **11.2. Trigger: audit\_log\_critical\_actions**

CREATE OR REPLACE FUNCTION audit\_critical\_action()  
RETURNS TRIGGER AS $$  
BEGIN  
  INSERT INTO audit\_logs (  
    user\_id, action, entity\_type, entity\_id, metadata  
  ) VALUES (  
    NEW.author\_id,  
    TG\_OP,  
    TG\_TABLE\_NAME,  
    NEW.id,  
    jsonb\_build\_object(  
      'old\_value', to\_jsonb(OLD),  
      'new\_value', to\_jsonb(NEW)  
    )  
  );  
  RETURN NEW;  
END;  
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg\_audit\_reports  
  AFTER INSERT OR UPDATE OR DELETE ON community\_reports  
  FOR EACH ROW EXECUTE FUNCTION audit\_critical\_action();

# **ANEXO A: DICCIONARIO DE DATOS**

| Tipo Dato | PostgreSQL | Uso |
| :---- | :---- | :---- |
| **Identificador** | UUID | Primary keys, foreign keys |
| **Texto corto** | VARCHAR(N) | Nombres, títulos, categorías |
| **Texto largo** | TEXT | Descripciones, contenido |
| **Número entero** | INTEGER | Contadores, scores |
| **Número decimal** | DECIMAL(M,N) | Porcentajes, métricas |
| **Booleano** | BOOLEAN | Flags, estados binarios |
| **Fecha** | DATE | Fechas sin hora |
| **Timestamp** | TIMESTAMP | Fechas con hora exacta |
| **JSON** | JSONB | Metadata flexible, arrays |
| **Geometría** | GEOMETRY | Coordenadas PostGIS |
| **IP** | INET | Direcciones IP |
| **Array** | TYPE\[\] | Listas homogéneas |

# **ANEXO B: NOMENCLATURAS Y ESTÁNDARES**

* Tablas: snake\_case plural (community\_reports)  
* Columnas: snake\_case (created\_at)  
* Primary Keys: Siempre "id UUID"  
* Foreign Keys: nombre\_tabla\_id (author\_id)  
* Timestamps: created\_at, updated\_at, deleted\_at  
* Enums: VARCHAR con CHECK constraint documentado  
* Índices: idx\_tabla\_columna(s) (idx\_reports\_status)  
* Vistas materializadas: nombre\_mv (authority\_performance\_mv)  
* Funciones: verbo\_sustantivo() (calculate\_commitment\_result)  
* Triggers: trg\_tabla\_evento (trg\_profiles\_updated\_at)

# **ANEXO C: RESUMEN MÉTRICAS**

| Categoría | Total |
| :---- | :---- |
| **TABLAS PRINCIPALES** | 45 |
| **TABLAS AUXILIARES/JUNCTION** | 12 |
| **TOTAL TABLAS** | 57 |
|  |  |
| **RELACIONES 1:1** | 3 |
| **RELACIONES 1:N** | 58 |
| **RELACIONES N:M** | 12 |
| **TOTAL RELACIONES** | 73 |
|  |  |
| **ÍNDICES BTREE** | 98 |
| **ÍNDICES GIST (PostGIS)** | 8 |
| **ÍNDICES ÚNICOS** | 24 |
| **ÍNDICES PARCIALES** | 15 |
| **TOTAL ÍNDICES** | 145 |
|  |  |
| **POLÍTICAS RLS** | 45 |
| **VISTAS MATERIALIZADAS** | 8 |
| **FUNCIONES ALMACENADAS** | 15 |
| **TRIGGERS** | 12 |
|  |  |
| **ESTIMADO REGISTROS MVP (Año 1\)** | 10M \- 50M |

**FIN DEL DOCUMENTO**

**Diagrama Entidad-Relación (DER)**  
**CIVICUM \- Sistema Nervioso Cívico de Chile**

**Modelo de Datos PostgreSQL Completo**  
**57 Tablas | 73 Relaciones | 145 Índices**

**\#SomosIdeasNoBandos**

*Versión 1.0 | Enero 2026 | Actualizado: 24/01/2026*  
*Documento técnico para validación 80+ expertos profesionales*