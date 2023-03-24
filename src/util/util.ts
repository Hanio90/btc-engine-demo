export function formatNumberWithCommas(num: number): string {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function formatPrice(price: number): string | null {
    if(price){
        return `${formatNumberWithCommas(price)}`;
    }
    return null;
}