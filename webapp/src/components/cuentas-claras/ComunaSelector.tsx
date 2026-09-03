import { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { useSinimData } from '@/pages/cuentas-claras/useSinimData';

/**
 * ComunaSelector — Dropdown de selección de comuna con búsqueda.
 * Lista las 345 comunas de Chile ordenadas alfabéticamente.
 * Uso: <ComunaSelector value="13101" onChange={setComuna} />
 */
interface ComunaSelectorProps {
  value: string;
  onChange: (comunaId: string) => void;
  className?: string;
}

export function ComunaSelector({ value, onChange, className }: ComunaSelectorProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const ref = useRef<HTMLDivElement>(null);
  const sinimData = useSinimData() as Record<string, {
    comuna: string;
    comunaId: string;
    poblacion: number;
  }> | undefined;

  // Cerrar al clickear afuera
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const comunas = Object.values(sinimData || {})
    .sort((a, b) => a.comuna.localeCompare(b.comuna, 'es'))
    .filter(c =>
      search === '' ||
      c.comuna.toLowerCase().includes(search.toLowerCase())
    );

  const selected = sinimData?.[value];

  return (
    <div ref={ref} className={`relative ${className || ''}`}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-md border border-border bg-white px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors min-w-[180px]"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="truncate flex-1 text-left">
          {!sinimData ? 'Cargando comunas...' : selected ? selected.comuna : 'Selecciona comuna'}
        </span>
        <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />
      </button>

      {open && (
        <div className="absolute z-50 mt-1 w-72 rounded-md border border-border bg-white shadow-lg">
          <div className="p-2 border-b border-border">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Buscar comuna..."
                className="w-full rounded-md border border-border bg-white pl-8 pr-2 py-1.5 text-sm outline-none focus:ring-2 focus:ring-azul-500"
                autoFocus
              />
            </div>
          </div>
          <ul
            role="listbox"
            className="max-h-60 overflow-y-auto p-1"
            aria-label="Comunas de Chile"
          >
            {comunas.length === 0 && (
              <li className="px-3 py-2 text-sm text-muted-foreground">
                No se encontraron resultados
              </li>
            )}
            {comunas.map(c => (
              <li key={c.comunaId}>
                <button
                  type="button"
                  role="option"
                  aria-selected={c.comunaId === value}
                  onClick={() => {
                    onChange(c.comunaId);
                    setOpen(false);
                    setSearch('');
                  }}
                  className={`w-full text-left rounded px-3 py-2 text-sm transition-colors ${
                    c.comunaId === value
                      ? 'bg-azul-100 text-azul-700 font-medium'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {c.comuna}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ComunaSelector;
