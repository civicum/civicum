# Latencia Starlink Rural y Rebotes (Squad 254)

**Misión:** Latencia de 1000ms intermitente en Chiloé o Putre. ¿El UI rebota o espera?

## 1. El Riesgo del Multi-Voto Accidental (Patience Bug)
Una dirigente vecinal en una isla de Chiloé conectada por internet satelital inestable (Banda ancha Rural o Starlink obstruido) entra a apoyar una medida municipal. Presiona el botón verde `[VOTAR A FAVOR]`.
La latencia (Ping hacia East-1 USA) es de 1200 milisegundos. Como la pantalla "no hace nada" de inmediato, **ella presiona el botón nerviosamente 7 veces seguidas**. 
Si el Endpoint REST no está protegido quirúrgicamente, la base de datos de Neon insertará 7 votos idénticos para el mismo RUT y romperá permanentemente el escrutinio de *"Una Persona, Un Voto"*. Un hacker urbano después dirá que el proyecto rural "metió bots".

## 2. Paradigma Idempotency-First

1.  **Disabling UI Inmediato:** En el instante `t=0` del clic, el botón pasa a `disabled={true}`, y cambia su SVG al Loader Vectorial. El Frontend impide físicamente el segundo toque mientras cruza la cordillera ida y vuelta.
2.  **Generación de UUID en el Cliente:** Cada componente de voto React genera un hash (Idempotency Key v4) que se monta en el header de la solicitud POST.
3.  **Redis Cache Barrier (Backend):** Si a pesar del disable, la red satelital re-envía la ráfaga (TCP Retries automáticos), Vercel revisa en Upstash si esa `Idempotency-Key` fue recibida en los últimos 60 segundos. Si hace "Hit", descarta las ráfagas secundarias respondiendo un exitoso fingido HTTP 200, protegiendo la pulcritud matemática de las urnas de CIVICUM.
