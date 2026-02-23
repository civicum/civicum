# Domain Security Protocol (Squad 180)

**Auditoría:** Roles 69 (Ops), 71 (OpSec), 72 (Finanzas), 21 (SRE), 01 (Product Lead)

## El Riesgo de Secuestro de la Raíz
Si CIVICUM pierde el control del dominio `civicum.cl`, el Estado pierde su "Sistema Nervioso". Toda la confianza construida en el Voto Ciudadano se convierte en un arma contra los ciudadanos si los atacantes dirigen el tráfico a un clon idéntico diseñado para robar RUTs y contraseñas.
Este no es un problema de código (Vercel) ni de datos (Neon), es una falla administrativa letal.

## 1. Candado de Registro Duro (Registry Lock)
Todo registrador compatible (Ej: NIC Chile, Namecheap o Cloudflare Registrar) debe tener activado el EPP Status `clientTransferProhibited`. 
Esto impide que cualquier solicitud de transferencia de dominio sea procesada por el registrador de destino, incluso si el atacante logró hackear el correo del administrador (Admin Contact). 

*   **Para habilitar.** Un ataque de fuerza bruta contra el registrador fallará.
*   **Para deshabilitar.** Se requiere autenticación multi-factor (MFA / YubiKey Hardware Token) presencial o biometría autorizada por el Ops Lead (Rol 69).

## 2. Firma Criptográfica de Zonas (DNSSEC)
Para prevenir ataques *Man-in-the-Middle* a nivel ISP (Ej: un atacante BGP desvía el tráfico del país hacia un nodo falso), la zona DNS en Cloudflare debe obligatoriamente activar **DNSSEC**.

1.  Cloudflare inyecta firmas digitales (`DS` records) en cada registro A, CNAME o TXT.
2.  El resolver recursivo del ISP del ciudadano valida la cadena de confianza hasta la raíz de internet. Si la firma no cuadra con el dominio original `CIVICUM`, el navegador Chrome bloqueará preventivamente la conexión (Hard Fail).

## 3. Fondo de Supervivencia Fría (Finanzas)
El descuido más humillante es olvidarse de renovar la tarjeta de crédito.

*   **El Fondo F-50:** CIVICUM debe destinar presupuesto ("Tierras Frías") para pre-pagar o fondear la cuenta del registrador por un mínimo de **5 años por adelantado**. El dominio no está atado al ciclo de facturación mensual del servidor Vercel, previniendo que una crisis financiera de corto plazo borre el CNAME del mapa global.
