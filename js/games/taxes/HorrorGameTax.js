export class HorrorGameTax {
    constructor(price) {
        this.price = price;
    }

    calculateTax(price)
    {
        const tax = price * 0.35;
        this.tax = tax;
        return tax;
    }

    getTax()
    {
        if(!this.tax){
            return null;
        }
        return this.tax;
    }
}