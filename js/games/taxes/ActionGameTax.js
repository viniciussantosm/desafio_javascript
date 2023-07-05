export class ActionGameTax {
    constructor(price) {
        this.price = price;
    }

    calculateTax(price)
    {
        const tax = price * 0.45;
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