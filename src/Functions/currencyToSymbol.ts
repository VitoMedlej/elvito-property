export default function currencyToSymbol(currency : string) {
    return currency === 'USD'
        ? '$'
        : currency === 'EUR'
            ? '€'
            : 'L.L'
}
