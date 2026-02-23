# Protocolo de Auditoría Final y Firma (Squad G1)

**Squad:** 43. Escuadrón G1: Auditoría Final  
**Misión:** La firma final que autoriza el despliegue.  
**Responsables:** Auditor End-to-End, Product Lead, Arquitecto Software, Abogado Público, Riesgos Socio-técnicos.

## 1. El Veto Unánime
El despliegue a producción requiere la firma criptográfica (o aprobación explícita en GitHub) de los 5 roles clave.
- **Regla:** Si UNO solo vota "NO GO", el despliegue se cancela.
- **Sin presiones:** El rol de "Riesgos Socio-técnicos" tiene el mismo peso que el "Product Lead". Si la app es técnicamente perfecta pero éticamente peligrosa, no sale.

## 2. El Ritual de "Smoke Test" Social
Antes de abrir el tráfico:
- **Prueba de "Abuela":** Un usuario no técnico de +70 años debe completar el flujo principal sin ayuda.
- **Prueba de "Troll":** Un miembro del equipo intenta destruir la comunidad en 5 minutos.

## 3. La Bitácora de Riesgos Aceptados
No existe software perfecto. Si salimos con bugs, deben estar documentados.
- **Critical:** 0 permitidos.
- **High:** 0 permitidos.
- **Medium/Low:** Permitidos solo si hay un plan de mitigación y fecha de arreglo documentada.

## 4. Kill Switch Ready
Verificamos que el botón de "Apagar Todo" (Protocolo Omega-Finalísimo) esté operativo y probado.
- En caso de desastre, podemos bajar el sitio y dejar una página estática en < 60 segundos.

*Firmar este release es aceptar la responsabilidad pública de sus consecuencias.*
