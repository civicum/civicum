export interface PresupuestoMunicipal {
  ingresos: {
    tributarios: number;
    patrimoniales: number;
    de_operacion: number;
    transferencias: number;
    otros: number;
  };
  gastos: {
    educacion: number;
    salud: number;
    seguridad_publica: number;
    desarrollo_urbano: number;
    medio_ambiente: number;
    cultura_y_deporte: number;
    administracion: number;
    otros: number;
  };
}