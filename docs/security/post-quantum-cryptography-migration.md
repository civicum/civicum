# Ataque Cuántico y Vencimiento Criptográfico (Squad 292)

**Misión:** Computador Cuántico rompe el RSA 2048 de las contraseñas vecinales.

## 1. El Riesgo del "Store Now, Decrypt Later"
Inteligencias extanjeras u oligopolios chilenos podrían estar "guardando" hoy el tráfico encriptado de los líderes activistas de CIVICUM. Hoy no pueden leerlo porque romper AES-256 o RSA tomaría millones de años.
Pero en 10 años, si un ordenador cuántico comercial aplica el Algoritmo de Shor, podrá factorizar números primos al instante. Todo el tráfico "seguro" de hoy revelará su interior en 2036, exponiendo las identidades anónimas, votos secretos, y rutas de corrupción (Snowden Quantum). Para activistas ambientales en América Latina, esto es una condena póstuma de cárcel (o peor).

## 2. Transición Hacia Inmunidad Celular (Lattice-Based)

1.  **Migración de Claves en Movimiento (PQC Ready):** CIVICUM fuerza a que todo Handshake TLS que conecte con endpoints sensibles no use Elliptic Curve normal. Nos acoplamos tempranamente al estándar NIST Híbrido: `X25519Kyber768Draft00`. El atacante grabando el tráfico TLS hoy tendrá que romper el cifrador clásico y, al mismo tiempo, resolver los problemas de "shortest vector" en un entramado multidimensional euclidiano de Kyber, lo cual los computadores cuánticos NO pueden hacer matemáticamente mejor que uno normal.
2.  **Hashing Post-Cuántico (Argon2id + SHA-3):** Ningún hash interno utiliza SHA-1, SHA-256 a secas, ni MD5. CIVICUM asume la fuerza bruta del futuro imponiendo la migración a `Argon2id` con alta agresividad de Memoria Exigida, porque la computación cuántica no otorga acelerones en esquemas de encriptamiento atados a lectura/escritura de memoria local.
