import {Game} from '../Game.js';

export class ShooterGame extends Game{
    constructor(shooterGameTax, revenueShare, name, year, price)
    {
        super(name, "Shooter", year, price);
        this.shooterGameTax = shooterGameTax;
        this.revenueShare = revenueShare;
    }

    calculateTotalPrice()
    {
        const price = this.getPrice();
        const tax = this.shooterGameTax.calculateTax(price);
        const revenue = (price + tax) * this.revenueShare;
        return price + tax + revenue;
    }

    getGameData()
    {
        const totalPrice = this.calculateTotalPrice();
        const type = this.getType();
        const tax = this.shooterGameTax.getTax();
        return {name: this.name, year: this.year, type: type, tax: tax, revenueShare: this.revenueShare, total: totalPrice};
    }
}