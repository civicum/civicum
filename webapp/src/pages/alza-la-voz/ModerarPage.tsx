import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import SkeletonScreen from '@/components/feedback/SkeletonScreen';
import ErrorState from '@/components/feedback/ErrorState';
import EmptyState from '@/components/feedback/EmptyState';
import TimelineGestiones from '@/components/ui/timeline-gestiones';
import {
  Shield,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  MapPin,
  Clock,
  Eye,
} from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * ModerarPage — Panel de moderación para reportes ciudadanos.
 * Fuente: Investigación Parte 4.4 (Moderación 3 capas: automático → Jurado Digital → Consejo Cívico)
 *
 * Esta página implementa la CAPA 2 (Jurado Digital): humano moderando con contexto.
 * Casos que llegan aquí: reportes PENDING que necesitan validación humana.
 *
 * Solo accesible para usuarios con nivel L3+ (organizadores verificados).
 * Fuente de datos: GET /api/community-reports?status=PENDING
 */

interface ReportePendiente {
  id: string;
  title: string;
  description: string;
  status: string;
  evidenceUrls: string[];
  createdAt: string;
  communeId: string | null;
}

async function fetchReportesPendientes(): Promise<{ reports: ReportePendiente[] }> {
  const res = await fetch('/api/community-reports');
  if (!res.ok) throw new Error('No se pudieron cargar los reportes');
  const data = await res.json();
  // Filtrar solo pendientes
  return { reports: data.reports.filter((r: ReportePendiente) => r.status === 'PENDING') };
}

export default function ModerarPage() {
  const [reporteSeleccionado, setReporteSeleccionado] = useState<ReportePendiente | null>(null);
  const queryClient = useQueryClient();

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['reportes-pendientes'],
    queryFn: fetchReportesPendientes,
  });

  const mutation = useMutation({
    mutationFn: async ({ id, accion, nota }: { id: string; accion: 'approved' | 'rejected' | 'escalated'; nota?: string }) => {
      const res = await fetch('/api/community-reports', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: accion === 'approved' ? 'APPROVED' : accion === 'rejected' ? 'REJECTED' : 'ESCALATED', nota }),
      });
      if (!res.ok) throw new Error('Error al moderar');
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reportes-pendientes'] });
      setReporteSeleccionado(null);
    },
  });

  const pendientes = data?.reports ?? [];

  if (isLoading) return <SkeletonScreen rows={4} showHeader={true} showCards={false} />;
  if (isError) return <ErrorState message={error instanceof Error ? error.message : 'Error desconocido'} onRetry={() => refetch()} />;

  // Vista de detalle si hay reporte seleccionado
  if (reporteSeleccionado) {
    const r = reporteSeleccionado;
    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
        <Button variant="outline" onClick={() => setReporteSeleccionado(null)} className="mb-4">
          ← Volver a la lista
        </Button>
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-xl">{r.title}</CardTitle>
                <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {new Date(r.createdAt).toLocaleDateString('es-CL', { day: 'numeric', month: 'long', year: 'numeric' })}
                  {r.communeId && (
                    <>
                      <span>·</span>
                      <MapPin className="w-4 h-4" />
                      <span>Comuna: {r.communeId}</span>
                    </>
                  )}
                </div>
              </div>
              <Badge variant="secondary" className="bg-amber-100 text-amber-700">
                Pendiente
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-medium mb-2">Descripción</h3>
              <p className="text-slate-700 whitespace-pre-wrap">{r.description}</p>
            </div>
            {r.evidenceUrls.length > 0 && (
              <div>
                <h3 className="font-medium mb-2">Evidencia</h3>
                <div className="grid grid-cols-3 gap-2">
                  {r.evidenceUrls.map((url, i) => (
                    <img key={i} src={url} alt={`Evidencia ${i + 1}`} className="rounded-lg object-cover h-24 w-full" />
                  ))}
                </div>
              </div>
            )}
            {/* Timeline del reporte */}
            <div>
              <h3 className="font-medium mb-3">Estado actual</h3>
              <TimelineGestiones steps={[
                { estado: 'completado', titulo: 'Reporte recibido', fecha: r.createdAt, descripcion: 'Vecino reportó el problema' },
                { estado: 'en_progreso', titulo: 'En moderación', fecha: new Date().toISOString(), descripcion: 'Equipo CIVICUM revisando evidencia' },
                { estado: 'pendiente', titulo: 'Aprobación', fecha: '', descripcion: 'Enviar a autoridad' },
                { estado: 'pendiente', titulo: 'Resolución', fecha: '', descripcion: 'Problema resuelto' },
              ]} />
            </div>
            {/* Acciones de moderación */}
            <div className="border-t pt-4 space-y-3">
              <h3 className="font-medium">Decisión del moderador</h3>
              <div className="grid grid-cols-3 gap-3">
                <Button
                  onClick={() => mutation.mutate({ id: r.id, accion: 'approved' })}
                  disabled={mutation.isPending}
                  className="bg-emerald-600 hover:bg-emerald-700"
                >
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Aprobar → autoridad
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => mutation.mutate({ id: r.id, accion: 'rejected' })}
                  disabled={mutation.isPending}
                >
                  <XCircle className="w-4 h-4 mr-2" />
                  Rechazar
                </Button>
                <Button
                  variant="outline"
                  onClick={() => mutation.mutate({ id: r.id, accion: 'escalated' })}
                  disabled={mutation.isPending}
                >
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Escalar
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                * Aprobar: envía a autoridad competente. Rechazar: descarta por evidencia insuficiente. Escalar: sube a Consejo Cívico.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
          <Shield className="w-7 h-7" /> Panel de Moderación
        </h1>
        <p className="text-slate-500">
          Revisa y valida reportes de la comunidad. Nivel 2: Jurado Digital.
        </p>
      </div>

      {pendientes.length === 0 ? (
        <EmptyState
          title="No hay reportes pendientes"
          description="Todos los reportes han sido procesados. ¡Buen trabajo!"
          icon={<CheckCircle2 className="w-10 h-10 text-emerald-400" />}
        />
      ) : (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            {pendientes.length} reporte{pendientes.length !== 1 ? 's' : ''} pendiente{pendientes.length !== 1 ? 's' : ''} de revisión
          </p>
          <div className="grid gap-3">
            {pendientes.map((r) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="cursor-pointer"
                onClick={() => setReporteSeleccionado(r)}
              >
                <Card className="hover:border-terracota-300 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-slate-900 truncate">{r.title}</h3>
                        <p className="text-sm text-slate-500 line-clamp-2 mt-1">{r.description.substring(0, 150)}...</p>
                        <div className="flex items-center gap-3 mt-2 text-xs text-slate-400">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {new Date(r.createdAt).toLocaleDateString('es-CL')}
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {r.evidenceUrls.length} evidencia{r.evidenceUrls.length !== 1 ? 's' : ''}
                          </span>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-amber-100 text-amber-700 shrink-0 ml-3">
                        Pendiente
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
