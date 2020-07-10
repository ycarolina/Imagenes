export interface ComMesaImagenesTotalesI {
  id: string;
  codigo_mesa: number;
  estado_registro: number;
  fecha_modificacion: number;
  fecha_registro: number;
  images: {
    'ASDF-ASDFA': string;
    'WQER-QWERQW': string;
  };
  imgLatitud: number;
  imgLongitud: number;
  totLatitud: number;
  totLongitud: number;
  totalesD: {
    BLANCOS: number;
    NULOS: number;
  };
  totalesE: {
    BLANCOS: number;
    NULOS: number;
  };
  totalesP: {
    BLANCOS: number;
    NULOS: number;
  };
  usuario_modificacion: string;
  usuario_registro: string;
}
