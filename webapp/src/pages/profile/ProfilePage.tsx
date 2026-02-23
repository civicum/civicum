import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Shield, Target, Trophy, FileText, Key } from 'lucide-react';
import { useUIStore } from '@/store/useUIStore';

export default function ProfilePage() {
    const { theme, setTheme } = useUIStore();

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <Avatar className="w-20 h-20 border-4 border-slate-100">
                    <AvatarImage src="" alt="Avatar Ciudadano" />
                    <AvatarFallback className="bg-terracota-100 text-terracota-700 text-2xl font-bold">CN</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                    <h1 className="text-2xl font-bold tracking-tight">Ciudadano Nuevo</h1>
                    <p className="text-slate-500 text-sm">Comuna: Sin Asignar</p>
                    <div className="flex gap-2 mt-2">
                        <Badge variant="outline" className="bg-slate-50 flex items-center gap-1">
                            <Shield className="w-3 h-3 text-slate-400" /> Nivel L0 (Anónimo)
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Trophy className="w-3 h-3 text-dorado-500" /> Karma: 0
                        </Badge>
                    </div>
                </div>
            </div>

            <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
                    <TabsTrigger value="overview" className="rounded-none border-b-2 border-transparent data-[state=active]:border-terracota-500 data-[state=active]:bg-transparent py-3">Resumen</TabsTrigger>
                    <TabsTrigger value="security" className="rounded-none border-b-2 border-transparent data-[state=active]:border-terracota-500 data-[state=active]:bg-transparent py-3">Verificación</TabsTrigger>
                    <TabsTrigger value="settings" className="rounded-none border-b-2 border-transparent data-[state=active]:border-terracota-500 data-[state=active]:bg-transparent py-3">Ajustes</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-4 pt-4">
                    <div className="grid gap-4 md:grid-cols-2">
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium flex items-center gap-2 text-slate-600">
                                    <Target className="w-4 h-4" /> Impacto Cívico
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">0 Reportes</div>
                                <p className="text-xs text-slate-500 mt-1">Con tu nivel actual, tus reportes tienen prioridad estándar.</p>
                            </CardContent>
                        </Card>

                        <Card className="bg-terracota-50 border-terracota-100 text-terracota-900">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium flex items-center gap-2">
                                    <FileText className="w-4 h-4" /> Academia Cívica
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">0%</div>
                                <p className="text-xs opacity-80 mt-1">Sube tu Nivel de Credibilidad completando cursos cortos obligatorios.</p>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                <TabsContent value="security" className="pt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Niveles de Identidad (Poder Cívico)</CardTitle>
                            <CardDescription>Mientras más proteges a la red del fraude de bots, más poder consigues.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex justify-between items-center p-3 border rounded-lg bg-slate-50">
                                <div className="flex items-center gap-3">
                                    <div className="bg-green-100 p-2 rounded-full">
                                        <Shield className="w-4 h-4 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm">L0 - Lector Base</p>
                                        <p className="text-xs text-slate-500">Puedes leer todo anonimamente. Reportes bloqueados o prioridad mínima.</p>
                                    </div>
                                </div>
                                <Badge variant="outline" className="text-green-600 border-green-200">Activo</Badge>
                            </div>

                            <div className="flex justify-between items-center p-3 border rounded-lg">
                                <div className="flex items-center gap-3 opacity-60">
                                    <div className="bg-slate-100 p-2 rounded-full">
                                        <Key className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm">L1 - Correo Validado</p>
                                        <p className="text-xs text-slate-500">Permite firmar peticiones de apoyo. Reportes locales con prioridad normal.</p>
                                    </div>
                                </div>
                                <button className="text-sm text-terracota-600 font-medium hover:underline">Verificar correo</button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="settings" className="pt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Preferencias de Aplicación</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="font-medium text-sm">Modo Oscuro</p>
                                    <p className="text-xs text-slate-500">Para escenarios de poca luz y ahorro de batería OLED.</p>
                                </div>
                                <select
                                    className="p-2 border rounded-md text-sm"
                                    value={theme}
                                    onChange={(e) => setTheme(e.target.value as 'light' | 'dark' | 'system')}
                                >
                                    <option value="system">Sistema</option>
                                    <option value="light">Claro</option>
                                    <option value="dark">Oscuro</option>
                                </select>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
