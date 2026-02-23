# Internacionalización: Civicum Latam (Squad 250)

**Misión:** ¿Es el código abstracto para exportarlo a Perú o Argentina?

## 1. El Riesgo del Código Acoplado Chauvinista
Actualmente los esquemas SQL (Drizzle ORM) de la base de datos están inyectados de jerga hiper-nacional chilena. Las variables se llaman `rut_usuario`, `comuna_id`, `region_intendencia`. 
Si la ONG Transparency International en Colombia quiere utilizar CIVICUM para combatir corrupción municipal en Cundinamarca, tendrían que hacer refactoring y forzar RegEx para transformar RUTs en Cédulas (CC) y Comunas en Departamentos. Nuestro código no escala internacionalmente.

## 2. Abstracción Lexical Base de Datos
CIVICUM Core debe transformarse estructuralmente en Cívica OS. Solo cambia la Capa de Localización (i18n).

1.  **Refactor Universal de Ids:** Queda prohibida la columna `rut`. Todos los primary y external keys identificatorios pasan a llamarse UUID `national_id_number` (NID).
2.  **Geometría Polimórfica (ISO 3166-2):** El Estado no se divide en "Regiones" y "Comunas". La Base de Datos utilizará el Estándar Internacional con los nodos: 
    - `Adm-Level-1` (Región/Provincia/Estado).
    - `Adm-Level-2` (Comuna/Municipio/Cantón).
    - `Adm-Level-3` (Barrio/Cuadrante).
3.  **Plugin de Gobierno (Civicum.CL):** Las validaciones duras (como el verificador `Módulo 11` del RUT chileno, o la llamada OIDC a `ClaveÚnica.gob.cl`) saltan fuera del Core hacia un paquete NPM aislado llamado `@civicum/plugin-chile`. Argentina usará `@civicum/plugin-ar` validando sus AFIP keys.
