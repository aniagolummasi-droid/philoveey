export function formatCurrency(amount) {
  return `N${Number(amount).toLocaleString('en-NG')}`
}
