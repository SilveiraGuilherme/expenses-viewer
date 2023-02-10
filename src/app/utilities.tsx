export function formatReal(n: number) {
  return 'R$' + n.toFixed(2).replace('.', ',');
}
