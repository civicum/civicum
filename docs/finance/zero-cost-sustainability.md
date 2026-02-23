# Protocolo de Sostenibilidad Zero-Cost (Squad F2)

**Squad:** 5. Escuadrón F2: Sostenibilidad  
**Misión:** Validar que el modelo "Zero-Cost" sea real y perpetuo.  
**Responsables:** Finanzas, Product Lead, Head of Ops, Growth Ético.

## 1. La Ecuación Imposible
Civicum debe costar $0 al usuario final y $0 en deuda técnica financiera.
`Costo Operativo < (Donaciones Voluntarias + Créditos de Nube + Trabajo Voluntario)`

### Reglas de Oro Financieras
1.  **Sin Venta de Datos:** Jamás. Ni metadatos anonimizados. El usuario no es el producto.
2.  **Sin Publicidad:** La atención no se vende.
3.  **Sin Inversionistas de Riesgo (VC):** Nadie que exija "retorno 10x" entra en la tabla de decisión.

## 2. Estrategia de Infraestructura "Gorriona"
Usamos capas gratuitas y tiers de bajo costo de manera agresiva pero legal.
- **Frontend:** Vercel Hobby / Netlify (CDN Global).
- **Backend:** Serverless Functions (Se apagan si no se usan).
- **Database:** Neon / Supabase (Free Tier con escalado automático).
- **IA:** Modelos destilados (pequeños) o APIs con donaciones de créditos.

## 3. Plan B: El "Invierno Nuclear"
Si todas las capas gratuitas desaparecen mañana:
- El sistema entra en **"Modo Estático"**: Se convierte en una web de solo lectura (HTML/CSS puro) alojada en GitHub Pages.
- La base de datos se exporta a **IPFS/Torrents** para que la comunidad la preserve.
- El proyecto no muere, se **cristaliza**.

## 4. Transparencia de Costos
Publicamos mensualmente nuestra factura de AWS/Vercel/OpenAI.
- Si gastamos $50 USD en IA, la comunidad debe saberlo y decidir si vale la pena.
- Fomentamos micro-donaciones dirigidas: "Paga 1 hora de servidor" (no al pozo común).

*La verdadera sostenibilidad es no necesitar dinero para existir.*
