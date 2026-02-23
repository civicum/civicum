# 🔄 VPS FAILOVER PLAN

**Versión:** 1.0  
**Última actualización:** 6 Febrero 2026  
**Soluciona:** Observación OC-1 (Auditoría OpenClaw)

---

## 🎯 Objetivo

Documentar VPS de respaldo para continuidad si Cloud-3 falla >4h.

---

## 🖥️ Proveedor Recomendado

| Proveedor | Plan | Costo | Región | Justificación |
|-----------|------|-------|--------|---------------|
| **Hetzner** | CX21 | €5.57/mes | EU (Helsinki) | Precio competitivo, GDPR |
| Alternativa: OVH | VPS Starter | €3.50/mes | Canadá | Soberanía datos |

---

## 📊 Objetivos de Recuperación

| Métrica | Target | Máximo Aceptable |
|---------|--------|------------------|
| **RPO** (Recovery Point Objective) | 24h | 48h |
| **RTO** (Recovery Time Objective) | 4h | 8h |

---

## 🔧 Procedimiento de Failover

### Pre-requisitos (mantener actualizados)
- [ ] Backup diario verificado en R2 storage
- [ ] Imagen Docker de OpenClaw en registry
- [ ] Certificados y secretos en vault
- [ ] Tailscale/Tunnel configurables

### Activación de Failover

```bash
# 1. Provision VPS respaldo (si no existe)
hcloud server create --name civicum-failover \
  --type cx21 --image ubuntu-22.04 --ssh-key civicum

# 2. Configurar túnel privado
tailscale up --authkey=XXXXXX

# 3. Restaurar Docker environment
docker load < /backup/openclaw-prod.tar
docker-compose up -d

# 4. Restaurar datos desde R2
rclone sync r2:civicum-backup/ /var/lib/openclaw/

# 5. Verificar healthchecks
curl http://localhost:8080/health
```

### Post-Failover
- [ ] Notificar equipo
- [ ] Monitorear 30min
- [ ] Actualizar DNS si necesario
- [ ] Planificar migración de vuelta

---

*Documento generado para cerrar Observación OC-1*
