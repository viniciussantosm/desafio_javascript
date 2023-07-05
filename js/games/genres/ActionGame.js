import {Game} from '../Game.js';

export class ActionGame extends Game{
    constructor(actionGameTax, revenueShare, name, year, price)
    {
        super(name, "Action", year, price);
        this.actionGameTax = actionGameTax;
        this.revenueShare = revenueShare;
    }

    calculateTotalPrice()
    {
        const price = this.getPrice();
        const tax = this.actionGameTax.calculateTax(price);
        const revenue = (price + tax) * this.revenueShare;
        return price + tax + revenue;
    }

    getGameData()
    {
        const totalPrice = this.calculateTotalPrice();
        const type = this.getType();
        const tax = this.actionGameTax.getTax();
        return {name: this.name, year: this.year, type: type, tax: tax, revenueShare: this.revenueShare, total: totalPrice};
    }
}