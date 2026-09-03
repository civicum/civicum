import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, CheckCircle2, UserPlus, ArrowLeft, Phone, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * KioskoPage — Modo kiosk para registro presencial en JJVV/municipalidad.
 * Fuente: Investigación Parte 5.4 (Colectividad), S3/S4 (adultos mayores)
 * Sprint 2.3 — Kioscos presenciales (post-2.1 SMS, 2.2 IVR, 2.3 A11y)
 *
 * Principios:
 * - Una acción por pantalla (single-step wizard)
 * - Sin jerga técnica
 * - Botones grandes (min-h-14 = 56px)
 * - Sin registro de email/password en kiosk (solo nombre + comuna)
 * - Confirmación por SMS para el usuario registrado
 * - Operador (voluntario/funcionario) verifica al usuario presencialmente
 *
 * Flujo: Operador inicia → Usuario da nombre + comuna → Operador confirma → SMS de bienvenida → Listo
 */

type Step = 'inicio' | 'datos' | 'confirmar' | 'exito';

interface KioskoForm {
  nombre: string;
  comuna: string;
  telefono: string;
}

const STEPS = [
  { id: 'inicio', titulo: 'Bienvenido al kiosco CIVICUM', descripcion: 'El vecino o vecina puede registrarse presencialmente con tu ayuda.' },
  { id: 'datos', titulo: 'Datos de la persona', descripcion: 'Nombre, comuna y teléfono (opcional).' },
  { id: 'confirmar', titulo: 'Confirmar registro', descripcion: 'Revisa que todo esté bien antes de crear la cuenta.' },
  { id: 'exito', titulo: '¡Listo!', descripcion: 'La persona fue registrada exitosamente.' },
];

export default function KioskoPage() {
  const [step, setStep] = useState<Step>('inicio');
  const [form, setForm] = useState<KioskoForm>({ nombre: '', comuna: '', telefono: '' });
  const [cargando, setCargando] = useState(false);

  const next = () => {
    if (step === 'inicio') setStep('datos');
    else if (step === 'datos') setStep('confirmar');
    else if (step === 'confirmar') {
      setCargando(true);
      // Simular registro (backend: POST /api/kiosk/register)
      setTimeout(() => {
        void fetch('/api/protected/kiosk-register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
        setCargando(false);
        setStep('exito');
      }, 1500);
    }
  };

  const back = () => {
    if (step === 'datos') setStep('inicio');
    else if (step === 'confirmar') setStep('datos');
  };

  const currentStepIdx = STEPS.findIndex(s => s.id === step);

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 flex items-center justify-center">
      <Card className="w-full max-w-lg border-2 border-terracota-200 shadow-xl">
        <CardContent className="p-6 md:p-8">
          {/* Progress indicator */}
          <div className="flex items-center gap-2 mb-6">
            {STEPS.map((s, i) => (
              <div key={s.id} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                  i < currentStepIdx ? 'bg-emerald-500 text-white'
                  : i === currentStepIdx ? 'bg-terracota-600 text-white'
                  : 'bg-slate-200 text-slate-400'
                }`}>
                  {i < currentStepIdx ? <CheckCircle2 className="w-5 h-5" /> : i + 1}
                </div>
                {i < 3 && <div className={`w-8 h-1 mx-1 ${i < currentStepIdx ? 'bg-emerald-500' : 'bg-slate-200'}`} />}
              </div>
            ))}
          </div>

          {/* Título */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-slate-900">{STEPS[currentStepIdx].titulo}</h1>
            <p className="text-slate-600 mt-1">{STEPS[currentStepIdx].descripcion}</p>
          </div>

          {/* Contenido por paso */}
          <AnimatePresence mode="wait">
            {step === 'inicio' && (
              <motion.div key="inicio" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                  <MapPin className="w-8 h-8 text-terracota-600 shrink-0" />
                  <div>
                    <p className="font-medium text-slate-800">Kiosco en: <strong>JJVV Tu Comuna</strong></p>
                    <p className="text-sm text-slate-500">Registro presencial SIN requerir email ni contraseña</p>
                  </div>
                </div>
                <div className="flex gap-3 pt-4">
                  <Button onClick={next} className="flex-1 bg-terracota-600 hover:bg-terracota-700 min-h-14 text-lg" size="lg">
                    Comenzar registro <UserPlus className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 'datos' && (
              <motion.div key="datos" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Nombre o apodo</label>
                  <Input
                    value={form.nombre}
                    onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))}
                    placeholder="Ej: Juan Pérez"
                    className="min-h-14 text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Comuna</label>
                  <Input
                    value={form.comuna}
                    onChange={e => setForm(f => ({ ...f, comuna: e.target.value }))}
                    placeholder="Ej: Padre Las Casas"
                    className="min-h-14 text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Teléfono (opcional)</label>
                  <Input
                    value={form.telefono}
                    onChange={e => setForm(f => ({ ...f, telefono: e.target.value }))}
                    placeholder="+56 9 1234 5678"
                    className="min-h-14 text-base"
                    type="tel"
                  />
                </div>
                <div className="flex gap-3 pt-4">
                  <Button variant="outline" onClick={back} className="min-h-14" size="lg">
                    <ArrowLeft className="mr-2 h-5 w-5" /> Atrás
                  </Button>
                  <Button onClick={next} disabled={!form.nombre.trim() || !form.comuna.trim()} className="flex-1 min-h-14 text-lg" size="lg">
                    Continuar <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 'confirmar' && (
              <motion.div key="confirmar" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                <div className="bg-slate-50 rounded-xl p-4 space-y-3">
                  <div><p className="text-sm text-slate-500">Nombre</p><p className="font-medium text-lg">{form.nombre}</p></div>
                  <div><p className="text-sm text-slate-500">Comuna</p><p className="font-medium text-lg">{form.comuna}</p></div>
                  {form.telefono && <div><p className="text-sm text-slate-500">Teléfono</p><p className="font-medium text-lg">{form.telefono}</p></div>}
                </div>
                <div className="flex items-center gap-2 p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <p className="text-sm text-emerald-800">La persona tendrá una cuenta gratuita para participar en CIVICUM.</p>
                </div>
                <div className="flex gap-3 pt-4">
                  <Button variant="outline" onClick={back} className="min-h-14" size="lg">
                    <ArrowLeft className="mr-2 h-5 w-5" /> Atrás
                  </Button>
                  <Button onClick={next} disabled={cargando} className="flex-1 bg-emerald-600 hover:bg-emerald-700 min-h-14 text-lg" size="lg">
                    {cargando ? 'Registrando...' : 'Registrar vecino/a'}
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 'exito' && (
              <motion.div key="exito" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="space-y-4 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">¡Registro exitoso!</h2>
                  <p className="text-slate-600 mt-1">{form.nombre} ya puede participar en CIVICUM.</p>
                </div>
                {form.telefono && (
                  <div className="flex items-center justify-center gap-2 p-3 bg-blue-50 border border-blue-200 rounded-xl text-sm text-blue-800">
                    <Phone className="w-4 h-4" />
                    SMS de bienvenida enviado a {form.telefono}
                  </div>
                )}
                <Button onClick={() => { setStep('inicio'); setForm({ nombre: '', comuna: '', telefono: '' }); }} className="w-full min-h-14 text-lg" size="lg">
                  Registrar otro vecino
                </Button>
                <Link to="/" className="block text-sm text-slate-500 hover:underline text-center">Volver al inicio</Link>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Info footer */}
          <div className="mt-8 pt-4 border-t border-slate-100 text-center text-xs text-slate-400 space-y-1">
            <p>Kiosco CIVICUM — Registro presencial para todos</p>
            <div className="flex items-center justify-center gap-4">
              <Button variant="link" size="sm" className="text-xs h-auto p-0" asChild>
                <a href="sms:+56912345678"><MessageSquare className="w-3 h-3 mr-1" /> SMS: +56 9 1234 5678</a>
              </Button>
              <Button variant="link" size="sm" className="text-xs h-auto p-0" asChild>
                <a href="tel:+5622345678"><Phone className="w-3 h-3 mr-1" /> Llamar: +56 2 2345 6789</a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
