const brl = new Intl.NumberFormat("pt-BR");

/** 531020 -> "531.020" */
export function formatNumber(value: number) {
  return brl.format(Math.round(value));
}
