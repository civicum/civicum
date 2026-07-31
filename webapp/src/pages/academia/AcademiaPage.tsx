import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Trophy, TrendingUp, ArrowRight, GraduationCap, Zap, Clock } from 'lucide-react';
import { useState } from 'react';

const MODULOS_ACADEMIA = [
  {
    icon: <BookOpen className="w-8 h-8" />,
    titulo: "Constitución y Leyes",
    descripcion: "Entiende cómo funcionan las leyes que te afectan día a día.",
    lecciones: 12,
    duracion: "5-10 min c/u",
    color: "bg-azul-50 text-azul-700 border-azul-200",
    iconBg: "bg-azul-100 text-azul-600",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    titulo: "Derechos Ciudadanos",
    descripcion: "Conoce tus derechos y cómo ejercerlos en la práctica.",
    lecciones: 8,
    duracion: "5-10 min c/u",
    color: "bg-terracota-50 text-terracota-700 border-terracota-200",
    iconBg: "bg-terracota-100 text-terracota-600",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    titulo: "Fiscalización Municipal",
    descripcion: "Aprende a leer presupuestos y fiscalizar a tu municipalidad.",
    lecciones: 10,
    duracion: "5-10 min c/u",
    color: "bg-green-50 text-green-700 border-green-200",
    iconBg: "bg-green-100 text-green-600",
  },
];

export default function AcademiaPage() {
  const [lessonsPerModule, setLessonsPerModule] = useState<Array<number>>([0, 0, 0]);
  const [completedLessons, setCompletedLessons] = useState<number>(0);
  const [completedModules, setCompletedModules] = useState<number>(0);

  const totalLessons = MODULOS_ACADEMIA.reduce((sum, module) => sum + module.lecciones, 0);
  const progressPercentage = completedLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
  const currentLevel = Math.floor(progressPercentage / 20); // Each 20% is a level
  const levelNames = ["Observador", "Aprendiz", "Ciudadano Activo", "Fiscalizador", "Líder Comunitario"];
  const currentLevelName = levelNames[Math.min(currentLevel, levelNames.length - 1)];

  const handleLessonComplete = (moduleIndex: number) => {
    setLessonsPerModule(prev => {
      const newArray = [...prev];
      if (newArray[moduleIndex] < MODULOS_ACADEMIA[moduleIndex].lecciones) {
        newArray[moduleIndex] += 1;
        setCompletedLessons(prev => prev + 1);

        // Check if module is completed
        if (newArray[moduleIndex] === MODULOS_ACADEMIA[moduleIndex].lecciones) {
          setCompletedModules(prev => prev + 1);
        }
      }
      return newArray;
    });
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Academia Cívica
        </h1>
        <p className="text-slate-500">
          Microlearning en cápsulas de 5-10 minutos. Sin algoritmos adictivos.
        </p>
      </div>

      {/* Progreso General */}
      <Card className="bg-gradient-to-r from-azul-600 to-azul-500 text-white border-0 shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <p className="text-azul-100 text-sm font-medium">TU PROGRESO CÍVICO</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black">L{currentLevel}</span>
                <span className="text-azul-200 text-sm">{currentLevelName}</span>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <div className="w-48 h-2 bg-azul-400/40 rounded-full overflow-hidden">
                  <div className="h-full w-[{progressPercentage}%] bg-white rounded-full" />
                </div>
                <span className="text-xs text-azul-200">{progressPercentage}% completado</span>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              <div className="text-center">
                <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center mx-auto">
                  <Trophy className="w-7 h-7 text-dorado-300" />
                </div>
                <p className="text-xs text-azul-200 mt-1">{completedModules} Insignias</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Módulos Disponibles */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-terracota-600" />
          Módulos Disponibles
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {MODULOS_ACADEMIA.map((modulo, index) => {
            const moduleProgress = lessonsPerModule[index];
            const moduleCompleted = moduleProgress >= modulo.lecciones;
            return (
              <Card
                key={modulo.titulo}
                className={`border shadow-sm hover:shadow-md transition-shadow ${modulo.color} ${moduleCompleted ? 'border-terracota-500' : ''}`}
              >
                <CardContent className="p-5 space-y-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${modulo.iconBg}`}>
                    {modulo.icon}
                  </div>
                  <h3 className="font-bold text-base">{modulo.titulo}</h3>
                  <p className="text-sm opacity-80 leading-relaxed">
                    {modulo.descripcion}
                  </p>
                  <div className="flex items-center gap-3 text-xs opacity-60 pt-1">
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3 h-3" /> {modulo.lecciones} lecciones
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {modulo.duracion}
                    </span>
                  </div>
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                    <div className={`bg-terracota-600 h-2.5 rounded-full w-[${(moduleProgress / modulo.lecciones) * 100}%] transition-all duration-500`} />
                  </div>
                  <p className="text-xs text-terracota-600 mt-1">{moduleProgress}/${modulo.lecciones} lecciones completadas</p>
                  {!moduleCompleted && (
                    <Button
                      variant="outline"
                      className="w-full mt-2 border-current/20 hover:bg-white/50"
                      onClick={() => handleLessonComplete(index)}
                      disabled={moduleProgress >= modulo.lecciones}
                    >
                      Continuar aprendiendo <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  )}
                  {moduleCompleted && (
                    <span className="w-full mt-2 text-center text-xs text-green-600">
                      ¡Módulo completado!
                    </span>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* CTA Final */}
      <Card className="border-dashed border-2 border-slate-300 bg-transparent">
        <CardContent className="p-8 text-center space-y-3">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto">
            <GraduationCap className="w-8 h-8 text-slate-400" />
          </div>
          <h3 className="text-lg font-bold text-slate-700">
            La educación cívica como herramienta de cambio
          </h3>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            Cada módulo que completas sube tu Nivel de Credibilidad Cívica y
            desbloquea nuevas capacidades en la plataforma. Sin prisas, sin
            algoritmos, a tu ritmo.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}