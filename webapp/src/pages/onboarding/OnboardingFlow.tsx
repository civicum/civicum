import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useOnboardingStore } from '@/store/useOnboardingStore';
import { useUIStore } from '@/store/useUIStore';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { MapPin, ShieldCheck, Target, CheckCircle2, ChevronRight, Navigation2, LogIn, Moon, Sun, ArrowRight, Shield, Activity, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CivicumLogo } from '@/components/icons/CivicumLogo';

const REGIONES_COMUNAS: Record<string, string[]> = {
    "Región Metropolitana": ["Santiago", "Providencia", "Ñuñoa", "Maipú", "Puente Alto", "La Florida"],
    "Valparaíso": ["Valparaíso", "Viña del Mar", "Quilpué", "Villa Alemana", "Puchuncaví", "Quintero"],
    "Biobío": ["Concepción", "Talcahuano", "San Pedro de la Paz", "Chiguayante", "Los Ángeles"],
    "Araucanía": ["Temuco", "Padre Las Casas", "Villarrica", "Pucón"]
};

// Variantes de animación para Splash y Onboarding
const slideVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 100 : -100,
        opacity: 0,
        scale: 0.95
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
        scale: 1
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? 100 : -100,
        opacity: 0,
        scale: 0.95
    })
};

export default function OnboardingFlow() {
    const navigate = useNavigate();
    const { currentStep, nextStep, prevStep, completeOnboarding, hasCompletedOnboarding, data, updateData } = useOnboardingStore();
    const { theme, setTheme } = useUIStore();

    // Local state
    const [direction, setDirection] = useState(1);
    const [selectedRegion, setSelectedRegion] = useState("");
    const [isDetectingLocation, setIsDetectingLocation] = useState(false);

    // Splash State (0, 1, 2) before starting onboarding step 1
    const [splashStep, setSplashStep] = useState(0);

    if (hasCompletedOnboarding) {
        return <Navigate to="/" replace />;
    }

    // Manejadores del Flujo Splash -> Onboarding
    const handleSplashNext = () => {
        setDirection(1);
        if (splashStep < 2) {
            setSplashStep(prev => prev + 1);
        } else {
            setSplashStep(3); // 3 significa "terminó el splash, comienza el onboarding real"
        }
    };

    // Manejadores del Onboarding Real
    const handleNext = () => {
        setDirection(1);
        nextStep();
    };

    const handlePrev = () => {
        setDirection(-1);
        if (currentStep === 1) {
            setSplashStep(2); // Volver al último paso del splash
        } else {
            prevStep();
        }
    };

    const handleComplete = () => {
        completeOnboarding();
        navigate('/');
    };

    const handleDetectLocation = () => {
        setIsDetectingLocation(true);
        setTimeout(() => {
            setSelectedRegion("Valparaíso");
            updateData({ communeId: "Puchuncaví" });
            setIsDetectingLocation(false);
        }, 1500);
    };

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    // Helper para saber si estamos en modo oscuro localmente (incluso si theme==="system")
    const isDarkMode = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    // Force exact string class logic to avoid Tailwind conflicts
    const globalBgClass = isDarkMode
        ? 'bg-[#0f172a] text-white'
        : 'bg-slate-50 text-slate-900';

    const isSplashPhase = splashStep < 3;

    return (
        <div className={`flex min-h-screen flex-col items-center justify-center p-4 overflow-hidden relative transition-colors duration-700 ${globalBgClass}`}>

            {/* Botón Flotante Global de Tema (Visible Todo el Tiempo) */}
            <div className="absolute top-6 right-6 z-50">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={toggleTheme}
                    className={`rounded-full w-12 h-12 shadow-lg backdrop-blur-md transition-all duration-300
            ${isDarkMode ? 'bg-white/10 border-white/20 text-yellow-400 hover:bg-white/20' : 'bg-white/50 border-slate-200 text-indigo-500 hover:bg-white/80'}
          `}
                >
                    {isDarkMode ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-indigo-500" />}
                </Button>
            </div>

            {/* Background Blobs Inmersivos */}
            <div className={`absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[120px] pointer-events-none transition-opacity duration-1000 ${isDarkMode ? 'bg-terracota-600/20' : 'bg-terracota-300/30'}`} />
            <div className={`absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full blur-[120px] pointer-events-none transition-opacity duration-1000 ${isDarkMode ? 'bg-azul-600/20' : 'bg-azul-300/30'}`} />

            <div className="w-full max-w-lg z-10 flex flex-col items-center">

                {/* --- FASE 1: SPLASH SCREENS PERSUASIVAS --- */}
                {isSplashPhase && (
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={`splash-${splashStep}`}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="w-full flex flex-col items-center text-center space-y-10"
                        >
                            {splashStep === 0 && (
                                <div className="flex flex-col items-center space-y-8 mt-10">
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ type: "spring", bounce: 0.5, duration: 1 }}
                                        className="w-56 h-56 md:w-64 md:h-64 mb-4"
                                    >
                                        <CivicumLogo className={`w-full h-full drop-shadow-2xl ${isDarkMode ? 'text-white' : 'text-slate-900'}`} />
                                    </motion.div>

                                    <div className="space-y-4">
                                        <h1 className="text-5xl md:text-6xl font-black tracking-tighter">
                                            CIVICUM
                                        </h1>
                                        <h2 className={`text-xl md:text-2xl font-semibold tracking-tight ${isDarkMode ? 'text-terracota-400' : 'text-terracota-600'}`}>
                                            El Sistema Nervioso Cívico de Chile
                                        </h2>
                                    </div>

                                    <p className={`text-lg font-light max-w-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                        De la frustración a la acción.
                                        <br />Fiscaliza. Verifica. Actúa.
                                    </p>

                                    <Button
                                        onClick={handleSplashNext}
                                        className={`mt-8 w-64 h-16 text-xl font-bold rounded-2xl shadow-2xl transition-all hover:scale-105
                      ${isDarkMode
                                                ? 'bg-white text-slate-900 hover:bg-slate-100 shadow-[0_0_30px_rgba(255,255,255,0.2)]'
                                                : 'bg-slate-900 text-white hover:bg-slate-800 shadow-[0_10px_30px_rgba(15,23,42,0.2)]'}
                    `}
                                    >
                                        Descubrir <ArrowRight className="ml-2 w-6 h-6" />
                                    </Button>
                                </div>
                            )}

                            {splashStep === 1 && (
                                <div className="flex flex-col items-center space-y-8 w-full">
                                    <div className={`w-24 h-24 rounded-full flex items-center justify-center shadow-xl mb-4
                    ${isDarkMode ? 'bg-gradient-to-tr from-azul-600 to-azul-400' : 'bg-gradient-to-tr from-azul-500 to-azul-300'}
                  `}>
                                        <Activity className="w-12 h-12 text-white" />
                                    </div>

                                    <div className="space-y-4">
                                        <h2 className="text-3xl font-extrabold tracking-tight">Tu Voz, con Peso Real</h2>
                                        <p className={`text-lg leading-relaxed max-w-md ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                            Integraremos más de <b>43 fuentes de datos oficiales</b>. Se acabó gritarle al vacío en redes sociales; aquí tus reportes llegan directo a los mapas de la autoridad.
                                        </p>
                                    </div>

                                    <div className={`p-5 rounded-2xl border text-left w-full max-w-md ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-slate-900/5 border-slate-900/10'}`}>
                                        <h3 className="font-bold flex items-center mb-2"><ShieldAlert className="w-5 h-5 mr-2 text-terracota-500" /> Sin Algoritmos Adictivos</h3>
                                        <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>CIVICUM no está diseñado para atraparte horas mirando pantallas. Entras, reportas, te organizas, e impactas tu en torno real.</p>
                                    </div>

                                    <Button onClick={handleSplashNext} className="w-full max-w-xs h-14 text-lg font-bold bg-terracota-500 hover:bg-terracota-600 text-white rounded-xl shadow-[0_0_20px_rgba(239,68,68,0.4)]">
                                        Continuar
                                    </Button>
                                </div>
                            )}

                            {splashStep === 2 && (
                                <div className="flex flex-col items-center space-y-8 w-full">
                                    <div className={`w-28 h-28 rounded-3xl flex items-center justify-center shadow-2xl mb-4
                    ${isDarkMode ? 'bg-gradient-to-tr from-green-600 to-green-500' : 'bg-gradient-to-tr from-green-500 to-green-400'}
                  `}>
                                        <Shield className="w-14 h-14 text-white" />
                                    </div>

                                    <div className="space-y-4">
                                        <h2 className={`text-4xl font-extrabold tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Privacidad Blindada</h2>
                                        <p className={`text-xl leading-relaxed max-w-md ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                            Tus datos son tuyos. Operamos bajo <b className={isDarkMode ? 'text-white' : 'text-slate-800'}>Honestidad Radical</b> y el principio de <b className={isDarkMode ? 'text-white' : 'text-slate-800'}>1 Persona = 1 Voto</b>.
                                        </p>
                                    </div>

                                    <Button onClick={handleSplashNext} className={`w-full max-w-xs h-16 text-xl font-bold rounded-2xl shadow-2xl transition-all hover:scale-105
                    ${isDarkMode ? 'bg-white text-slate-900 hover:bg-slate-100 shadow-[0_0_20px_rgba(255,255,255,0.2)]' : 'bg-slate-900 text-white hover:bg-slate-800'}
                  `}>
                                        Siguiente
                                    </Button>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                )}


                {/* --- FASE 2: ONBOARDING FUNCIONAL (5 PASOS) --- */}
                {!isSplashPhase && (
                    <>
                        {/* Header del Onboarding Real */}
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="w-full flex flex-col items-center mb-8 space-y-6"
                        >
                            <div className="w-16 h-16 mb-2">
                                <CivicumLogo className={`w-full h-full ${isDarkMode ? 'text-white' : 'text-slate-900'}`} />
                            </div>
                            <div className="w-full px-2 flex items-center gap-4">
                                <Progress
                                    value={(currentStep / 5) * 100}
                                    className={`h-2 flex-1 ${isDarkMode ? 'bg-white/10 [&>div]:bg-white' : 'bg-slate-200 [&>div]:bg-slate-900'}`}
                                />
                                <span className={`text-sm font-bold font-mono ${isDarkMode ? 'text-white/80' : 'text-slate-600'}`}>
                                    {currentStep} / 5
                                </span>
                            </div>
                        </motion.div>

                        {/* Tarjeta de Contenido Glassmorphism */}
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={currentStep}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="w-full"
                            >
                                <Card className={`border-0 shadow-2xl ring-1 overflow-hidden rounded-[2rem] 
                  ${isDarkMode ? 'bg-[#1e293b]/80 backdrop-blur-3xl ring-white/10' : 'bg-white/90 backdrop-blur-2xl ring-slate-900/5 shadow-slate-200/50'}
                `}>

                                    {/* PASO 1: Pacto */}
                                    {currentStep === 1 && (
                                        <CardContent className="p-8 md:p-10 flex flex-col items-center text-center space-y-6">
                                            <div className="w-20 h-20 bg-gradient-to-tr from-terracota-500 to-terracota-400 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3">
                                                <LogIn className="w-10 h-10 text-white" />
                                            </div>
                                            <div className="space-y-4">
                                                <h2 className={`text-3xl font-extrabold tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Honestidad Radical</h2>
                                                <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                                    No podemos arreglar tu ciudad solos. Necesitamos que confirmes que tus reportes serán reales y constructivos.
                                                </p>
                                            </div>

                                            <Button
                                                onClick={handleNext}
                                                className={`w-full h-14 text-lg font-bold rounded-2xl transition-all
                          ${isDarkMode ? 'bg-white text-slate-900 hover:bg-slate-100 shadow-[0_0_20px_rgba(255,255,255,0.2)]' : 'bg-slate-900 text-white hover:bg-slate-800 shadow-xl'}
                        `}
                                            >
                                                Acepto el Pacto Cívico <ChevronRight className="ml-2 w-5 h-5" />
                                            </Button>
                                        </CardContent>
                                    )}

                                    {/* PASO 2: Territorio */}
                                    {currentStep === 2 && (
                                        <CardContent className="p-8 flex flex-col items-center space-y-6">
                                            <div className="w-16 h-16 bg-gradient-to-tr from-azul-500 to-azul-400 rounded-2xl flex items-center justify-center shadow-lg mb-2">
                                                <MapPin className="w-8 h-8 text-white" />
                                            </div>
                                            <div className="text-center space-y-2 w-full">
                                                <h2 className="text-2xl font-bold tracking-tight">Tu Territorio</h2>
                                                <p className={isDarkMode ? 'text-white/70' : 'text-slate-600'}>
                                                    Conectamos tus necesidades directamente con las autoridades de tu sector.
                                                </p>
                                            </div>

                                            <div className="w-full space-y-4">
                                                <Button
                                                    variant="outline"
                                                    className={`w-full h-12 flex items-center justify-center gap-2 font-bold
                            ${isDarkMode ? 'bg-white/5 border-white/20 text-white hover:bg-white/10' : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50 shadow-sm'}
                          `}
                                                    onClick={handleDetectLocation}
                                                    disabled={isDetectingLocation}
                                                >
                                                    {isDetectingLocation ? (
                                                        <div className={`w-5 h-5 border-2 rounded-full animate-spin ${isDarkMode ? 'border-white/30 border-t-white' : 'border-slate-300 border-t-slate-900'}`} />
                                                    ) : (
                                                        <Navigation2 className="w-5 h-5" />
                                                    )}
                                                    {isDetectingLocation ? 'Ubicando Satélite...' : 'Detectar mi Comuna Automáticamente'}
                                                </Button>

                                                <div className="relative flex items-center py-2">
                                                    <div className={`flex-grow border-t ${isDarkMode ? 'border-white/10' : 'border-slate-200'}`}></div>
                                                    <span className={`flex-shrink-0 mx-4 text-sm font-medium ${isDarkMode ? 'text-white/40' : 'text-slate-400'}`}>O ingresa manualmente</span>
                                                    <div className={`flex-grow border-t ${isDarkMode ? 'border-white/10' : 'border-slate-200'}`}></div>
                                                </div>

                                                <div className="space-y-3">
                                                    <select
                                                        className={`w-full p-4 rounded-xl outline-none font-semibold transition-all appearance-none
                              ${isDarkMode ? 'bg-black/30 border border-white/10 text-white focus:ring-terracota-500' : 'bg-white border border-slate-300 text-slate-900 focus:ring-terracota-500 shadow-sm'}
                            `}
                                                        value={selectedRegion}
                                                        onChange={(e) => {
                                                            setSelectedRegion(e.target.value);
                                                            updateData({ communeId: "" });
                                                        }}
                                                    >
                                                        <option value="" disabled>1. Selecciona tu Región</option>
                                                        {Object.keys(REGIONES_COMUNAS).map(region => (
                                                            <option key={region} value={region}>{region}</option>
                                                        ))}
                                                    </select>

                                                    <select
                                                        className={`w-full p-4 rounded-xl outline-none font-semibold transition-all appearance-none disabled:opacity-50
                              ${isDarkMode ? 'bg-black/30 border border-white/10 text-white focus:ring-terracota-500' : 'bg-white border border-slate-300 text-slate-900 focus:ring-terracota-500 shadow-sm'}
                            `}
                                                        value={data.communeId || ""}
                                                        onChange={(e) => updateData({ communeId: e.target.value })}
                                                        disabled={!selectedRegion}
                                                    >
                                                        <option value="" disabled>2. Selecciona tu Comuna</option>
                                                        {selectedRegion && REGIONES_COMUNAS[selectedRegion].map(comuna => (
                                                            <option key={comuna} value={comuna}>{comuna}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="flex gap-3 w-full pt-4">
                                                <Button variant="ghost" onClick={handlePrev} className={`flex-1 ${isDarkMode ? 'text-white/70 hover:text-white hover:bg-white/10' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}>Atrás</Button>
                                                <Button onClick={handleNext} disabled={!data.communeId} className={`flex-[2] font-bold ${isDarkMode ? 'bg-white text-slate-900 hover:bg-slate-100' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
                                                    Siguiente <ChevronRight className="ml-1 w-4 h-4" />
                                                </Button>
                                            </div>
                                        </CardContent>
                                    )}

                                    {/* PASO 3: Identidad Cívica (Observador) */}
                                    {currentStep === 3 && (
                                        <CardContent className="p-8 md:p-10 flex flex-col items-center space-y-6">
                                            <div className="w-16 h-16 bg-gradient-to-tr from-dorado-500 to-dorado-400 rounded-2xl flex items-center justify-center shadow-lg mb-2">
                                                <ShieldCheck className="w-8 h-8 text-white" />
                                            </div>
                                            <div className="text-center space-y-2 w-full">
                                                <h2 className="text-2xl font-bold tracking-tight">Identidad y Poder</h2>
                                                <p className={isDarkMode ? 'text-white/70' : 'text-slate-600'}>
                                                    CIVICUM usa un sistema de niveles para evitar cuentas falsas.
                                                </p>
                                            </div>

                                            <div className={`w-full rounded-2xl p-5 border space-y-4 ${isDarkMode ? 'bg-black/20 border-white/10' : 'bg-white border-slate-200 shadow-sm'}`}>
                                                <div className="flex items-start gap-4">
                                                    <div className="w-3 h-3 mt-1.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                                                    <div>
                                                        <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Empezarás como Observador</h3>
                                                        <p className={`text-sm mt-1 leading-relaxed ${isDarkMode ? 'text-white/60' : 'text-slate-600'}`}>Eres 100% anónimo. Podrás ver los mapas y enterarte de todo sin dar datos personales. Pero tus reportes no serán enviados oficialmente aún.</p>
                                                    </div>
                                                </div>

                                                <div className={`border-t my-2 ${isDarkMode ? 'border-white/10' : 'border-slate-100'}`} />

                                                <div className="flex items-start gap-4">
                                                    <div className="w-3 h-3 mt-1.5 rounded-full bg-slate-300" />
                                                    <div>
                                                        <h3 className={`font-bold text-xs uppercase px-2 py-0.5 rounded w-fit mb-1 ${isDarkMode ? 'bg-white/10 text-white/50' : 'bg-slate-100 text-slate-500'}`}>Próximamente en tu Perfil</h3>
                                                        <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-white/50' : 'text-slate-500'}`}>Cuando verifiques tu identidad (ClaveÚnica o Email), tus reportes obtendrán <b>Peso Jurídico</b>.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex gap-3 w-full pt-4">
                                                <Button variant="ghost" onClick={handlePrev} className={`flex-1 ${isDarkMode ? 'text-white/70 hover:text-white hover:bg-white/10' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}>Atrás</Button>
                                                <Button onClick={handleNext} className={`flex-[2] font-bold ${isDarkMode ? 'bg-white text-slate-900 hover:bg-slate-100' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
                                                    Entendido <ChevronRight className="ml-1 w-4 h-4" />
                                                </Button>
                                            </div>
                                        </CardContent>
                                    )}

                                    {/* PASO 4: Intereses (Causas) */}
                                    {currentStep === 4 && (
                                        <CardContent className="p-8 flex flex-col items-center space-y-6">
                                            <div className="w-16 h-16 bg-gradient-to-tr from-purple-500 to-purple-400 rounded-2xl flex items-center justify-center shadow-lg mb-2">
                                                <Target className="w-8 h-8 text-white" />
                                            </div>
                                            <div className="text-center space-y-2 w-full">
                                                <h2 className="text-2xl font-bold tracking-tight">Elige tus Batallas</h2>
                                                <p className={isDarkMode ? 'text-white/70' : 'text-slate-600'}>
                                                    CIVICUM no usa algoritmos adictivos para atraparte. Tú eliges qué resolver.
                                                </p>
                                            </div>

                                            <div className="flex flex-wrap gap-3 justify-center w-full mt-4">
                                                {['Inseguridad / Delitos', 'Problemas Ecológicos', 'Obras y Baches', 'Burocracia Municipal', 'Violencia de Género', 'Salud Pública'].map((interest) => {
                                                    const isSelected = data.interests.includes(interest);
                                                    return (
                                                        <button
                                                            key={interest}
                                                            onClick={() => {
                                                                const newInterests = isSelected
                                                                    ? data.interests.filter(i => i !== interest)
                                                                    : [...data.interests, interest];
                                                                updateData({ interests: newInterests });
                                                            }}
                                                            className={`px-4 py-3 text-sm font-bold rounded-xl transition-all duration-300 border
                                ${isSelected
                                                                    ? (isDarkMode
                                                                        ? 'bg-white text-slate-900 border-white shadow-[0_0_15px_rgba(255,255,255,0.4)] scale-105'
                                                                        : 'bg-slate-900 text-white border-slate-900 shadow-lg scale-105')
                                                                    : (isDarkMode
                                                                        ? 'bg-black/20 text-white/70 border-white/10 hover:bg-white/10 hover:border-white/30'
                                                                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-sm')
                                                                }`}
                                                        >
                                                            {interest}
                                                        </button>
                                                    );
                                                })}
                                            </div>

                                            <div className="flex gap-3 w-full pt-6">
                                                <Button variant="ghost" onClick={handlePrev} className={`flex-1 ${isDarkMode ? 'text-white/70 hover:text-white hover:bg-white/10' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}>Atrás</Button>
                                                <Button onClick={handleNext} className={`flex-[2] font-bold ${isDarkMode ? 'bg-white text-slate-900 hover:bg-slate-100' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
                                                    Siguiente <ChevronRight className="ml-1 w-4 h-4" />
                                                </Button>
                                            </div>
                                        </CardContent>
                                    )}

                                    {/* PASO 5: Cierre */}
                                    {currentStep === 5 && (
                                        <CardContent className="p-8 md:p-12 flex flex-col items-center text-center space-y-8">
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                                className="w-24 h-24 bg-gradient-to-tr from-green-500 to-green-400 rounded-full flex items-center justify-center shadow-lg relative"
                                            >
                                                <div className="absolute inset-0 bg-white/20 rounded-full animate-ping" />
                                                <CheckCircle2 className="w-12 h-12 text-white z-10" />
                                            </motion.div>

                                            <div className="space-y-4">
                                                <h2 className={`text-4xl font-extrabold tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Diagnóstico Listo</h2>
                                                <p className={`text-xl font-light leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                                    El mapa interactivo de <b className={isDarkMode ? 'text-white' : 'text-slate-900'}>{data.communeId}</b> está preparado. Has dado tu primer paso hacia una democracia en tiempo real.
                                                </p>
                                            </div>

                                            <div className="w-full flex flex-col gap-3 pt-6">
                                                <Button
                                                    onClick={handleComplete}
                                                    className="w-full h-16 text-xl font-black bg-gradient-to-r from-terracota-600 to-terracota-500 text-white border-0 hover:from-terracota-500 hover:to-terracota-400 rounded-2xl shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] hover:scale-105 transition-all"
                                                >
                                                    Entrar a CIVICUM
                                                </Button>
                                                <Button variant="ghost" onClick={handlePrev} className={`h-14 font-medium rounded-2xl ${isDarkMode ? 'text-slate-400 hover:text-white hover:bg-white/10' : 'text-slate-500 hover:text-slate-900'}`}>
                                                    Revisar mis datos
                                                </Button>
                                            </div>
                                        </CardContent>
                                    )}

                                </Card>
                            </motion.div>
                        </AnimatePresence>
                    </>
                )}
            </div>
        </div>
    );
}
