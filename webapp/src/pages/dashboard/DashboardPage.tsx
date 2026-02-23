import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DashboardPage() {
    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex flex-col gap-1">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">Inicio Local</h1>
                <p className="text-slate-500">Métricas y necesidades en tu entorno inmediato.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <Card className="bg-red-50 border-red-100 shadow-none">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium flex items-center gap-2 text-red-900">
                            <AlertTriangle className="w-4 h-4 text-red-600" /> Reportes Críticos
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-red-700">12 Activos</div>
                        <p className="text-xs text-red-600/80 mt-1">En un radio de 2km de tu posición anónima.</p>
                    </CardContent>
                </Card>

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
