export function formatPrice(price, currency = 'INR') {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
    });

    return formatter.format(price);
}