export function formatCurrency(price: number | string | undefined): string {
  const formattedPrice = Number(price).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return formattedPrice;
}