import {Game} from '../Game.js';

export class HorrorGame extends Game{
    constructor(horrorGameTax, revenueShare, name, year, price)
    {
        super(name, "Horror", year, price);
        this.horrorGameTax = horrorGameTax;
        this.revenueShare = revenueShare;
    }

    calculateTotalPrice()
    {
        const price = this.getPrice();
        const tax = this.horrorGameTax.calculateTax(price);
        const revenue = (price + tax) * this.revenueShare;
        return price + tax + revenue;
    }

    getGameData()
    {
        const totalPrice = this.calculateTotalPrice();
        const type = this.getType();
        const tax = this.horrorGameTax.getTax();
        return {name: this.name, year: this.year, type: type, tax: tax, revenueShare: this.revenueShare, total: totalPrice};
    }
}