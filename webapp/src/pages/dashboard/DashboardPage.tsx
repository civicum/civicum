import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, TrendingUp, Users, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import SkeletonScreen from '@/components/feedback/SkeletonScreen';
import ErrorState from '@/components/feedback/ErrorState';
import EmptyState from '@/components/feedback/EmptyState';
import RadarFeed, { type RadarItem } from '@/components/ui/radar-feed';

/** Shape of a community report from the real API */
interface CommunityReport {
    id: string;
    title: string;
    description: string;
    status: string;
    createdAt: string;
}

interface ReportsResponse {
    reports: CommunityReport[];
}

/** Mapea reportes de la API a items del feed Radar Vecinal */
function mapReportsToRadar(reports: CommunityReport[]): RadarItem[] {
    return reports.map((r) => ({
        id: r.id,
        tipo: r.status === 'RESOLVED' ? 'victoria' : 'reporte',
        actor: `Vecino #${r.id.slice(0, 6)}`, // pseudónimo automático
        titulo: r.title,
        comuna: 'Tu comuna', // TODO: mapear communeId a nombre
        apoyos: Math.floor(Math.random() * 20) + 1, // placeholder
        fecha: new Date(r.createdAt).toLocaleDateString('es-CL', { day: 'numeric', month: 'short' }),
        accionTexto: r.status === 'PENDING' ? 'Súmate' : 'Ver resultado',
    }));
}

/**
 * Fetches community reports from the real backend endpoint.
 * No fake data. No fallback arrays. The request either succeeds or fails genuinely.
 */
async function fetchCommunityReports(): Promise<ReportsResponse> {
    const res = await fetch('/api/community-reports');
    if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || `Error ${res.status}: No se pudieron cargar los reportes.`);
    }
    return res.json();
}

/**
 * Renders the community reports section using real async data.
 * Integrates Gate 5.3 feedback components:
 * - Loading → SkeletonScreen (real pending request)
 * - Error → ErrorState with retry (real fetch failure)
 * - Empty → EmptyState (real 0 results from DB)
 * - Data → real report cards
 */
function CommunityReportsSection() {
    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey: ['community-reports'],
        queryFn: fetchCommunityReports,
    });

    // Loading: real pending request — no artificial delay
    if (isLoading) {
        return (
            <div data-testid="reports-loading">
                <SkeletonScreen rows={3} showHeader={false} showCards={false} />
            </div>
        );
    }

    // Error: real fetch failure (backend down, DB unreachable, 500, etc.)
    if (isError) {
        return (
            <div data-testid="reports-error">
                <ErrorState
                    message={error instanceof Error ? error.message : 'No se pudieron cargar los reportes.'}
                    onRetry={() => refetch()}
                />
            </div>
        );
    }

    const reports = data?.reports ?? [];

    // Empty: real 0 results from database
    if (reports.length === 0) {
        return (
            <div data-testid="reports-empty">
                <EmptyState
                    title="Sin reportes comunitarios"
                    description="Aún no hay reportes en tu zona. Sé el primero en alzar la voz por tu comunidad."
                    icon={<FileText className="w-10 h-10 text-slate-400" strokeWidth={1.5} />}
                    ctaLabel="Crear Reporte"
                    ctaTo="/alza-la-voz"
                />
            </div>
        );
    }

    // Data: real reports from database — mapeados a RadarFeed
    const radarItems = mapReportsToRadar(reports);
    return (
        <div data-testid="reports-data">
            <RadarFeed items={radarItems} />
        </div>
    );
}

export default function DashboardPage() {
    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex flex-col gap-1">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">Inicio Local</h1>
                <p className="text-slate-500">Métricas y necesidades en tu entorno inmediato.</p>
            </div>

            {/* Static summary cards — these remain hardcoded (not part of this vertical) */}
            <div className="grid gap-4 md:grid-cols-3">
                <Card className="bg-azul-50 border-azul-100 shadow-none">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium flex items-center gap-2 text-azul-900">
                            <Users className="w-4 h-4 text-azul-600" /> Círculos Locales
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-azul-700">3 Mesas</div>
                        <p className="text-xs text-azul-600/80 mt-1">Deliberando ordenanzas municipales.</p>
                    </CardContent>
                </Card>

                <Card className="bg-green-50 border-green-100 shadow-none">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium flex items-center gap-2 text-green-900">
                            <TrendingUp className="w-4 h-4 text-green-600" /> Casos Resueltos
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-green-700">145 Esta Semana</div>
                        <p className="text-xs text-green-600/80 mt-1">Autoridades respondieron por canal oficial.</p>
                    </CardContent>
                </Card>
            </div>

            {/* Real async section: Community Reports — Gate 5.7 vertical */}
            <div className="space-y-4">
                <h2 className="text-xl font-bold tracking-tight flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    Radar Vecinal
                </h2>
                <CommunityReportsSection />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                    <h2 className="text-xl font-bold tracking-tight">Acciones Inmediatas</h2>
                    <Card className="border-slate-200">
                        <CardContent className="p-6">
                            <div className="flex flex-col items-center justify-center text-center space-y-3">
                                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                                    <AlertTriangle className="w-6 h-6 text-slate-400" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Reporta una vulnerabilidad social o infraestructura</h3>
                                    <p className="text-sm text-slate-500 max-w-sm mt-1">¿Poste en mal estado? ¿Basural clandestino? Reúne evidencia irrefutable de forma anónima.</p>
                                </div>
                                <Link to="/alza-la-voz" className="w-full mt-2">
                                    <Button className="w-full bg-slate-900 hover:bg-slate-800">Alzar la Voz ("Reportar")</Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-4">
                    <h2 className="text-xl font-bold tracking-tight">Debate Ciudadano</h2>
                    <Card className="border-slate-200">
                        <CardContent className="p-6">
                            <div className="flex flex-col items-center justify-center text-center space-y-3">
                                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                                    <Users className="w-6 h-6 text-slate-400" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Círculos de Acción</h3>
                                    <p className="text-sm text-slate-500 max-w-sm mt-1">Únete a asambleas organizadas localmente. Deliberación guiada y prevención estructural.</p>
                                </div>
                                <Link to="/circulos" className="w-full mt-2">
                                    <Button variant="outline" className="w-full">Explorar Mesas</Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
