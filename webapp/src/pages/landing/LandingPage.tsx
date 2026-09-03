import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CivicumLogo } from '@/components/icons/CivicumLogo';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowRight,
  Eye,
  ShieldCheck,
  Users,
  TrendingUp,
  MapPin,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { useEffect } from 'react';
import { useUIStore } from '@/store/useUIStore';

/**
 * LandingPage — Primera impresión inmersiva de CIVICUM.
 * Fuente: CIVICUM_RESEARCH_APPLICATION_PLAN.md Sección 1.1.1
 *
 * Objetivo: Nivel 0→1 de la Escalera de Confianza.
 * - Tagline: "De la queja a la acción."
 * - Victorias visibles ANTES de registro
 * - CTA "Empieza ya" (no "Regístrate")
 * - CTA secundario "Solo mirar" (modo visitante)
 * - Sello "Independiente" visible
 * - Sección "Quiénes Somos" con fotos reales (placeholder por ahora)
 * - Transparencia financiera visible
 */

// Datos de victorias ciudadanas (placeholder — futuro: fetch de API)
const VICTORIAS = [
  {
    id: 1,
    titulo: 'Luminarias reparadas en plaza central',
    comuna: 'Santiago',
    detalle: '5 vecinos reportaron el problema. La municipalidad respondió en 3 días.',
    icon: '💡',
    categoria: 'Infraestructura',
  },
  {
    id: 2,
    titulo: 'Presupuesto participativo aprobado',
    comuna: 'Puente Alto',
    detalle: '120 vecinos votaron. $50M asignados a mejoramiento de plazas.',
    icon: '💰',
    categoria: 'Transparencia',
  },
  {
    id: 3,
    titulo: 'Árboles podados en calle peligrosa',
    comuna: 'Providencia',
    detalle: 'Reporte ciudadano activó revisión técnica municipal.',
    icon: '🌳',
    categoria: 'Seguridad',
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function LandingPage() {
  const navigate = useNavigate();
  const { setTheme } = useUIStore();

  // Forzar tema claro para landing (más cálido)
  useEffect(() => {
    setTheme('light');
  }, [setTheme]);

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-slate-900">
      {/* Header simple */}
      <header className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CivicumLogo className="h-8 w-8" />
          <span className="font-bold text-lg text-slate-900">CIVICUM</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#victorias" className="text-slate-600 hover:text-slate-900 transition-colors">
            Victorias
          </a>
          <a href="#quienes-somos" className="text-slate-600 hover:text-slate-900 transition-colors">
            Quiénes somos
          </a>
          <a href="#transparencia" className="text-slate-600 hover:text-slate-900 transition-colors">
            Transparencia
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {/* Sello Independiente */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium"
          >
            <ShieldCheck className="h-4 w-4" />
            <span>100% ciudadano • Sin partidos • Sin publicidad</span>
          </motion.div>

          {/* Tagline principal */}
          <motion.h1
            {...fadeInUp}
            className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900"
          >
            De la queja a la acción
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto"
          >
            Miles de vecinos se organizan contigo para arreglar lo que importa.
            Gratis, fácil y con respaldo legal.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Button
              size="lg"
              onClick={() => navigate('/onboarding')}
              className="bg-[#C2503A] hover:bg-[#A03E2E] text-white px-8 py-6 text-lg h-auto rounded-xl shadow-lg shadow-[#C2503A]/30"
            >
              Empieza ya
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/dashboard')}
              className="px-8 py-6 text-lg h-auto rounded-xl border-slate-300 text-slate-700 hover:bg-slate-50"
            >
              <Eye className="mr-2 h-5 w-5" />
              Solo mirar
            </Button>
          </motion.div>

          {/* Microcopy: sin registro */}
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.3 }}
            className="text-sm text-slate-500"
          >
            No necesitas cuenta para explorar. Cuando quieras participar, te registras en 30 segundos.
          </motion.p>
        </div>
      </section>

      {/* Victorias Section — ANTES del registro */}
      <section id="victorias" className="container mx-auto px-4 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
            Lo que hemos logrado juntos
          </h2>
          <p className="text-slate-600">
            Casos reales de vecinos que transformaron su queja en acción
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {VICTORIAS.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="h-full border-slate-200 hover:shadow-md transition-shadow">
                <CardContent className="p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{v.icon}</span>
                    <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                      {v.categoria}
                    </span>
                  </div>
                  <h3 className="font-semibold text-slate-900">{v.titulo}</h3>
                  <div className="flex items-center gap-1 text-sm text-slate-500">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{v.comuna}</span>
                  </div>
                  <p className="text-sm text-slate-600">{v.detalle}</p>
                  <div className="flex items-center gap-1 text-sm text-emerald-600 font-medium pt-2">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Logrado por vecinos</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quiénes Somos */}
      <section id="quienes-somos" className="container mx-auto px-4 py-12 md:py-16 bg-slate-50 rounded-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto space-y-4"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Quiénes somos</h2>
          <p className="text-slate-600">
            Somos vecinos, no políticos. CIVICUM nació de la frustración de ver problemas que nadie resolvía.
            Creamos esta herramienta para que cualquier chileno pueda hacer que su municipio responda.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-slate-500 pt-2">
            <Users className="h-4 w-4" />
            <span>Equipo independiente, financiado por ciudadanos como tú</span>
          </div>
        </motion.div>
      </section>

      {/* Transparencia */}
      <section id="transparencia" className="container mx-auto px-4 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="border-slate-200">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-emerald-100 text-emerald-600">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900">Transparencia total</h3>
                  <p className="text-slate-600">
                    Publicamos quiénes nos financian, cuánto y para qué. Sin letra chica.
                    Puedes ver el detalle actualizado en nuestra página de transparencia.
                  </p>
                  <a
                    href="/transparencia"
                    className="inline-flex items-center gap-1 text-[#264653] font-medium hover:underline"
                  >
                    Ver transparencia financiera
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Footer simple */}
      <footer className="container mx-auto px-4 py-8 border-t border-slate-200">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <CivicumLogo className="h-5 w-5" />
            <span>CIVICUM — Sistema Nervioso Cívico de Chile</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <TrendingUp className="h-4 w-4" />
              Datos oficiales
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="h-4 w-4" />
              Independiente
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
