import { useNavigate, Navigate } from 'react-router-dom';
import { useOnboardingStore } from '../../store/useOnboardingStore';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { MapPin, ShieldAlert, HeartHandshake, CheckCircle2 } from 'lucide-react';

export default function OnboardingFlow() {
    const navigate = useNavigate();
    const { currentStep, nextStep, prevStep, completeOnboarding, hasCompletedOnboarding, data, updateData } = useOnboardingStore();

    if (hasCompletedOnboarding) {
        return <Navigate to="/" replace />;
    }

    const handleComplete = () => {
        completeOnboarding();
        navigate('/');
    };

    const progressValue = (currentStep / 5) * 100;

    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-slate-50">
            <div className="w-full max-w-md space-y-4">
                <div className="flex items-center gap-4 px-2">
                    <Progress value={progressValue} className="h-2 flex-1" />
                    <span className="text-xs text-slate-500 font-medium">{currentStep} / 5</span>
                </div>

                <Card className="border-slate-200 shadow-sm">
                    {currentStep === 1 && (
                        <>
                            <CardHeader className="text-center space-y-2">
                                <div className="mx-auto w-12 h-12 bg-terracota-100 rounded-full flex items-center justify-center mb-2">
                                    <HeartHandshake className="w-6 h-6 text-terracota-600" />
                                </div>
                                <CardTitle className="text-2xl font-bold tracking-tight">Bienvenido a CIVICUM</CardTitle>
                                <CardDescription className="text-base">
                                    El sistema nervioso cívico. Aquí tu voz tiene impacto real, medible y protegido.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="text-slate-600 text-sm text-center">
                                CIVICUM no es una red social. Es una herramienta de co-gobernanza. Nos tomamos muy en serio la privacidad y la honestidad radical.
                            </CardContent>
                            <CardFooter>
                                <Button onClick={nextStep} className="w-full bg-terracota-500 hover:bg-terracota-600 text-white">Comenzar</Button>
                            </CardFooter>
                        </>
                    )}

                    {currentStep === 2 && (
                        <>
                            <CardHeader>
                                <div className="mx-auto w-12 h-12 bg-azul-100 rounded-full flex items-center justify-center mb-2">
                                    <MapPin className="w-6 h-6 text-azul-600" />
                                </div>
                                <CardTitle className="text-center text-xl">Tu Territorio</CardTitle>
                                <CardDescription className="text-center">
                                    CIVICUM es hiperlocal. ¿En qué comuna vives o participas principalmente?
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <select
                                    className="w-full p-2 border rounded-md bg-white text-sm"
                                    value={data.communeId || ""}
                                    onChange={(e) => updateData({ communeId: e.target.value })}
                                >
                                    <option value="" disabled>Selecciona tu comuna...</option>
                                    <option value="santiago">Santiago Centro</option>
                                    <option value="providencia">Providencia</option>
                                    <option value="valparaiso">Valparaíso</option>
                                    <option value="puchuncavi">Puchuncaví (Zona Sacrificio)</option>
                                </select>
                            </CardContent>
                            <CardFooter className="flex gap-2">
                                <Button variant="outline" onClick={prevStep} className="flex-1">Atrás</Button>
                                <Button onClick={nextStep} className="flex-1 bg-azul-500 hover:bg-azul-600" disabled={!data.communeId}>Continuar</Button>
                            </CardFooter>
                        </>
                    )}

                    {currentStep === 3 && (
                        <>
                            <CardHeader>
                                <div className="mx-auto w-12 h-12 bg-dorado-100 rounded-full flex items-center justify-center mb-2">
                                    <ShieldAlert className="w-6 h-6 text-dorado-600" />
                                </div>
                                <CardTitle className="text-center text-xl">Poder Cívico</CardTitle>
                                <CardDescription className="text-center">
                                    Tu nivel de verificación determina el peso de tus reportes y tu capacidad de moderar.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="text-sm text-slate-600 space-y-3">
                                <p>Nivel actual: <strong>L0 (Básico)</strong></p>
                                <p>Podrás leer y navegar, pero tus reportes tendrán baja urgencia hasta que verifiques tu identidad progresivamente (L1-L4).</p>
                                <p className="text-xs text-slate-500 mt-4 border-t pt-2">
                                    Pacto: Tus datos nunca serán vendidos. Usamos criptografía militar en tránsito.
                                </p>
                            </CardContent>
                            <CardFooter className="flex gap-2">
                                <Button variant="outline" onClick={prevStep} className="flex-1">Atrás</Button>
                                <Button onClick={nextStep} className="flex-1 bg-dorado-500 hover:bg-dorado-600 text-white">Entendido</Button>
                            </CardFooter>
                        </>
                    )}

                    {currentStep === 4 && (
                        <>
                            <CardHeader>
                                <CardTitle className="text-center text-xl">Polos de Acción</CardTitle>
                                <CardDescription className="text-center">
                                    ¿Qué temas te mueven? Selecciona tus áreas de interés para personalizar tu feed local.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex flex-wrap gap-2 justify-center">
                                {['Seguridad', 'Ecología', 'Burocracia', 'Infraestructura', 'Educación', 'Salud'].map((interest) => (
                                    <button
                                        key={interest}
                                        onClick={() => {
                                            const newInterests = data.interests.includes(interest)
                                                ? data.interests.filter(i => i !== interest)
                                                : [...data.interests, interest];
                                            updateData({ interests: newInterests });
                                        }}
                                        className={`px-3 py-1 text-sm rounded-full border transition-colors ${data.interests.includes(interest)
                                                ? 'bg-terracota-100 border-terracota-500 text-terracota-700'
                                                : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                                            }`}
                                    >
                                        {interest}
                                    </button>
                                ))}
                            </CardContent>
                            <CardFooter className="flex gap-2">
                                <Button variant="outline" onClick={prevStep} className="flex-1">Atrás</Button>
                                <Button onClick={nextStep} className="flex-1">Casi listo</Button>
                            </CardFooter>
                        </>
                    )}

                    {currentStep === 5 && (
                        <>
                            <CardHeader className="text-center">
                                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                                </div>
                                <CardTitle className="text-2xl">Todo Listo</CardTitle>
                                <CardDescription>
                                    Tu perfil base ha sido configurado. Has dado el primer paso hacia una democracia activa.
                                </CardDescription>
                            </CardHeader>
                            <CardFooter className="flex gap-2">
                                <Button variant="outline" onClick={prevStep} className="flex-1">Revisar</Button>
                                <Button onClick={handleComplete} className="flex-1 bg-terracota-500 hover:bg-terracota-600">
                                    Ir a mi Dashboard
                                </Button>
                            </CardFooter>
                        </>
                    )}
                </Card>
            </div>
        </div>
    );
}
