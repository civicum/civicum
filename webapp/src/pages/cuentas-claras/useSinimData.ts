// Hook para lazy-load de datos SINIM (345 comunas) usando React Suspense
// Evita cargar los 324KB en el bundle principal
import { use } from 'react';

// Caché module-level
let cache: Record<string, unknown> | null = null;
let promise: Promise<Record<string, unknown>> | null = null;

function loadSinim(): Promise<Record<string, unknown>> {
  if (cache) return Promise.resolve(cache);
  if (!promise) {
    promise = import('./sinimDataComunal').then((mod) => {
      cache = mod.SINIM_COMUNAS;
      return cache;
    });
  }
  return promise;
}

// Hook que suspende hasta que SINIM esté disponible
// Requiere estar dentro de un <Suspense> boundary
export function useSinimData() {
  return use(loadSinim());
}

// Tipo derivado del módulo (para TypeScript sin cargar el módulo)
export type SinimRecord = typeof import('./sinimDataComunal').SINIM_COMUNAS;
export type PresupuestoMunicipalComunal = SinimRecord[string];
