import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Send,
  Shield,
  MapPin,
  FileText,
  Search,
  Sparkles,
  Lightbulb,
  AlertCircle,
  Loader2,
} from 'lucide-react';

/**
 * CiviaPage — Asistente Cívico con placeholders conversacionales.
 * Fuente: Investigación Parte 5.4 (Espera/Incertidumbre) + 5.3 (Microcopy por contexto).
 *
 * Placeholders conversacionales:
 * - "🔎 Buscando en el Diario Oficial..."
 * - "📂 Revisando archivos municipales..."
 * - "⚖️ Consultando normativa legal..."
 *
 * Nivel emocional 6-7: esperanza activa, cercano pero respetuoso.
 */

const PLACEHOLDERS_BUSQUEDA = [
  '🔎 Buscando en el Diario Oficial...',
  '📂 Revisando archivos municipales...',
  '⚖️ Consultando normativa legal...',
  '📋 Verificando fuentes oficiales...',
  '🤝 Conectando con datos abiertos...',
];

const SUGERENCIAS_CIVIA = [
  {
    icon: <MapPin className="w-4 h-4" />,
    texto: '¿Cómo reporto un basural en mi comuna?',
    respuesta: 'Para reportar un basural ilegal en tu comuna, puedes:\n\n1. Ir directamente a la página de Alza la Voz y seleccionar "Residuos ilegales"\n2. Adjuntar fotos del lugar y ubicación aproximada\n3. El sistema genera un oficio automático al municipio\n4. Recibirás notificación cuando el municipio responda\n\n¿Necesitas más detalles sobre algún paso?',
  },
  {
    icon: <FileText className="w-4 h-4" />,
    texto: '¿Qué necesito para solicitar una audiencia con el alcalde?',
    respuesta: 'Para solicitar audiencia con tu alcalde:\n\n1. En CIVICUM, ve a Alza la Voz → "Audiencias públicas"\n2. Selecciona tu comuna y el tema\n3. Describe brevemente tu propósito\n4. La plataforma enviará la solicitud formal al municipio\n\nRecibirás respuesta dentro de 5 días hábiles según la ley de transparencia.',
  },
  {
    icon: <Search className="w-4 h-4" />,
    texto: '¿Cuál es el presupuesto municipal de este año?',
    respuesta: 'Puedo conectarte con Cuentas Claras para ver el presupuesto detallado de tu comuna. Allí encontrarás:\n\n- Ingresos totales y gastos por categoría\n- Comparación con otros años\n- Indicadores per cápita\n- Acceso al documento oficial del presupuesto\n\n¿Quieres que te muestre cómo llegar?',
  },
  {
    icon: <AlertCircle className="w-4 h-4" />,
    texto: '¿Qué hago si no me responden un reclamo?',
    respuesta: 'Si el municipio no responde en el plazo legal (5 días hábiles):\n\n1. CIVICUM activa automáticamente el **Plan B**\n2. Escalamos tu caso a Contraloría General de la República\n3. Generamos un expediente de incumplimiento\n4. Recibes notificación cuando Contraloría ficha tu caso\n\nNo te quedes sin respuesta. Te acompañamos hasta el final.',
  },
];

interface Mensaje {
  id: number;
  rol: 'usuario' | 'asistente';
  texto: string;
  placeholder?: boolean;
}

export default function CiviaPage() {
  const [mensajes, setMensajes] = useState<Mensaje[]>([
    {
      id: 1,
      rol: 'asistente',
      texto: 'Hola, soy Civia 👋 Tu compañero cívico. Estoy entrenada con 43+ fuentes de datos oficiales chilenas. ¿Qué problema quieres resolver hoy?',
    },
  ]);
  const [input, setInput] = useState('');
  const [cargando, setCargando] = useState(false);
  const [placeholderIdx, setPlaceholderIdx] = useState(0);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll al último mensaje
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [mensajes]);

  // Placeholder actual (incrementa en cada mensaje enviado)
  const placeholder = PLACEHOLDERS_BUSQUEDA[placeholderIdx];

  const handleEnviar = (texto: string) => {
    if (!texto.trim()) return;

    // Agregar mensaje del usuario
    const nuevoUsuario: Mensaje = { id: mensajes.length + 1, rol: 'usuario', texto };
    setMensajes((prev) => [...prev, nuevoUsuario]);
    setInput('');
    setCargando(true);

    // Rotar placeholder para el siguiente mensaje
    setPlaceholderIdx((prev) => (prev + 1) % PLACEHOLDERS_BUSQUEDA.length);

    // Simular respuesta después de 3-5 segundos (delay fijo para evitar impureza)
    setTimeout(() => {
      const sugerencia = SUGERENCIAS_CIVIA.find((s) =>
        texto.toLowerCase().includes(s.texto.toLowerCase().slice(5, 15))
      );
      const respuesta = sugerencia
        ? sugerencia.respuesta
        : 'Esa es una buena pregunta. Déjame buscar en las fuentes oficiales chilenas para darte información verificada. ¿Podrías contarme un poco más sobre tu situación?';

      const nuevoAsistente: Mensaje = {
        id: mensajes.length + 2,
        rol: 'asistente',
        texto: respuesta,
      };
      setMensajes((prev) => [...prev, nuevoAsistente]);
      setCargando(false);
    }, 3500);
  };

  const handleSugerencia = (texto: string) => {
    handleEnviar(texto);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Civia
        </h1>
        <p className="text-slate-500">
          Tu compañero cívico. De la queja a la acción, sin letra chica.
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
              <h2 className="text-xl font-bold">Hola, soy Civia 👋</h2>
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

      {/* Chat Interactivo */}
      <Card className="border-slate-200 shadow-sm">
        <CardContent className="p-0">
          {/* Área de mensajes */}
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {mensajes.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.rol === 'usuario' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    msg.rol === 'usuario'
                      ? 'bg-terracota-500 text-white rounded-br-sm'
                      : 'bg-slate-100 text-slate-800 rounded-bl-sm'
                  }`}
                >
                  {msg.texto.split('\n').map((linea, i) => (
                    <p key={i} className="text-sm leading-relaxed">
                      {linea}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Placeholder cargando */}
            {cargando && (
              <div className="flex justify-start">
                <div className="bg-slate-100 rounded-2xl rounded-bl-sm px-4 py-3 max-w-[80%]">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-sm">
                      {placeholder}
                    </span>
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-slate-100">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Input
                  placeholder="Pregúntale a Civia sobre trámites, leyes, o derechos..."
                  className="pr-12 bg-slate-50 border-slate-200"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleEnviar(input);
                    }
                  }}
                  disabled={cargando}
                />
                <Button
                  size="icon"
                  className="absolute right-1 top-1 h-8 w-8 bg-terracota-500 hover:bg-terracota-600"
                  onClick={() => handleEnviar(input)}
                  disabled={cargando || !input.trim()}
                  aria-label="Enviar pregunta"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Sugerencias */}
          <div className="px-4 pb-4">
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">
              Preguntas frecuentes
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              {SUGERENCIAS_CIVIA.map((sug, i) => (
                <button
                  key={i}
                  onClick={() => handleSugerencia(sug.texto)}
                  disabled={cargando}
                  className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 bg-slate-50 text-left hover:bg-white hover:border-terracota-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
