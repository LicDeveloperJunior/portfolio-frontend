export interface IPropiedadesTema{
  colorFuerte: string;
  colorDebil: string;
  textoPrimario: string;
  textoChico: string;
  textoMediano: string;
  textoGrande: string;
}

export interface ITema {
  default: IPropiedadesTema;
  dark?: IPropiedadesTema;
}
