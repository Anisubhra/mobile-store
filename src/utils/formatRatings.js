export function formatRatings(rating) {
    const formatter = new Intl.NumberFormat('en-US', { notation: 'compact' });

    return formatter.format(rating);
}