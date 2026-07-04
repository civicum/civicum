import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  MessageCircle,
  Send,
  Shield,
  MapPin,
  FileText,
  Search,
  Sparkles,
  Lightbulb,
  AlertCircle,
} from 'lucide-react';

const SUGERENCIAS_CIVIA = [
  {
    icon: <MapPin className="w-4 h-4" />,
    texto: "¿Cómo reporto un basural en mi comuna?",
  },
  {
    icon: <FileText className="w-4 h-4" />,
    texto: "¿Qué necesito para solicitar una audiencia con el alcalde?",
  },
  {
    icon: <Search className="w-4 h-4" />,
    texto: "¿Cuál es el presupuesto municipal de este año?",
  },
  {
    icon: <AlertCircle className="w-4 h-4" />,
    texto: "¿Qué hago si no me responden un reclamo?",
  },
];

export default function CiviaPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Civia
        </h1>
        <p className="text-slate-500">
          Tu asistente cívica inteligente. Sin rodeos, sin letra chica.
        </p>
      </div>

      {/* Tarjeta de Bienvenida */}
      <Card className="bg-gradient-to-br from-terracota-600 via-terracota-500 to-dorado-500 text-white border-0 shadow-xl overflow-hidden relative">
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        <CardContent className="p-6 relative z-10">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center shrink-0">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold">
                Hola, soy Civia 👋
              </h2>
              <p className="text-white/80 text-sm leading-relaxed max-w-lg">
                Estoy entrenada con <strong>43+ fuentes de datos oficiales
                chilenas</strong>. Puedo ayudarte a redactar solicitudes,
                entender trámites, encontrar información cívica verificada, y
                guiarte en tus derechos. Todo con honestidad radical: si no sé
                algo, te lo digo.
              </p>
              <div className="flex items-center gap-2 pt-2">
                <div className="flex items-center gap-1 text-xs bg-white/20 rounded-full px-3 py-1">
                  <Shield className="w-3 h-3" /> Privacidad blindada
                </div>
                <div className="flex items-center gap-1 text-xs bg-white/20 rounded-full px-3 py-1">
                  <Lightbulb className="w-3 h-3" /> Sin alucinaciones
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Chat Placeholder */}
      <Card className="border-slate-200 shadow-sm">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center gap-3 pb-4 border-b">
            <div className="w-10 h-10 bg-terracota-100 rounded-full flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-terracota-600" />
            </div>
            <div className="flex-1">
              <div className="relative">
                <Input
                  placeholder="Pregúntale a Civia sobre trámites, leyes, o derechos..."
                  className="pr-12 bg-slate-50 border-slate-200"
                  disabled
                />
                <Button
                  size="icon"
                  className="absolute right-1 top-1 h-8 w-8 bg-terracota-500 hover:bg-terracota-600"
                  disabled
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Sugerencias */}
          <div className="space-y-2">
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
              Preguntas frecuentes
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              {SUGERENCIAS_CIVIA.map((sug, i) => (
                <button
                  key={i}
                  disabled
                  className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 bg-slate-50 text-left hover:bg-white hover:border-terracota-200 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span className="text-terracota-500 shrink-0">{sug.icon}</span>
                  <span className="text-sm text-slate-600">{sug.texto}</span>
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Evidencia + Abstención Dura */}
      <Card className="border-amber-200 bg-amber-50">
        <CardContent className="p-4 flex items-start gap-3">
          <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
            <Lightbulb className="w-4 h-4 text-amber-600" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-amber-800">
              Política de Honestidad Radical
            </h4>
            <p className="text-xs text-amber-700 mt-1 leading-relaxed">
              Civia solo responde con información verificable de fuentes
              oficiales chilenas. Si no tiene evidencia para responder, se
              abstiene y te sugiere dónde buscar. Nunca inventa plazos,
              costos, normativas ni procedimientos.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}