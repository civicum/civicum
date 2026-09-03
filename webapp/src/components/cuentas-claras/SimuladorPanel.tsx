import { useState } from 'react';

interface Category {
  key: string;
  nombre: string;
  color: string;
}

interface SimuladorPanelProps {
  tipo: 'ingresos' | 'gastos';
  categorias: Category[];
  currentAmounts: Record<string, number>;
  onChange: (amounts: Record<string, number>) => void;
}

export default function SimuladorPanel({
  tipo,
  categorias,
  currentAmounts,
  onChange,
}: SimuladorPanelProps) {
  const [amounts, setAmounts] = useState(() => ({ ...currentAmounts }));

  const handleChange = (key: string, value: number) => {
    setAmounts(prev => ({ ...prev, [key]: value }));
    onAmountsChange();
  };

  const onAmountsChange = () => {
    onChange(amounts);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-bold text-lg flex items-center gap-2 text-terracota-600">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m2 0a2 2 0 100-4 2 2 0 000 4z"
            />
          </svg>
          Simulador de {tipo === 'ingresos' ? 'Ingresos' : 'Gastos'}
        </h3>
        <button
          onClick={() => {
            setAmounts({ ...currentAmounts });
            onAmountsChange();
          }}
          className="px-3 py-1.5 rounded-md text-sm font-medium border border-gray-300 bg-white hover:bg-gray-50"
        >
          Restablecer a valores originales
        </button>
      </div>

      <div className="space-y-2">
        {categorias.map(cat => (
          <div key={cat.key} className="flex items-center justify-between">
            <label className="flex items-center gap-3 w-1/2">
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center bg-${cat.color
                  .replace('text-', 'bg-')}100`}
              >
                <span className="text-xs font-bold">{cat.key.substring(0, 2).toUpperCase()}</span>
              </div>
              <div>
                <p className="text-sm font-medium">{cat.nombre}</p>
                <p className="text-xs text-slate-500">
                  {(
                    amounts[cat.key] ?? 0
                  ).toLocaleString('es-CL')} CLP ({(((
                    amounts[cat.key] ?? 0) /
                    (Object.values(amounts).reduce((a, b) => a + b, 0) || 1)
                  ) *
                    100)
                    .toFixed(1)}%)
                </p>
              </div>
            </label>
            <div className="w-1/2">
              <input
                type="range"
                min="0"
                max={2 * (currentAmounts[cat.key] || 1000000)}
                value={amounts[cat.key] ?? 0}
                onChange={e => handleChange(cat.key, Number(e.target.value))}
                aria-label={`Ajustar monto para ${cat.nombre}`}
                className="w-full"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t">
        <p className="text-sm font-medium text-slate-600">
          Total actual:{' '}
          <span className="font-mono">
            {Object.values(currentAmounts)
              .reduce((a, b) => a + b, 0)
              .toLocaleString('es-CL')}
          </span>
        </p>
        <p className="text-sm font-medium text-slate-600">
          Total simulado:{' '}
          <span className="font-mono">
            {Object.values(amounts)
              .reduce((a, b) => a + b, 0)
              .toLocaleString('es-CL')}
          </span>
        </p>
        {Math.abs(
          Object.values(amounts).reduce((a, b) => a + b, 0) -
            Object.values(currentAmounts).reduce((a, b) => a + b, 0)
        ) > 1 && (
          <p className="text-sm text-red-600">
            Advertencia: El total simulado difiere del total original.
          </p>
        )}
      </div>
    </div>
  );
}