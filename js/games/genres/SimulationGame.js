import {Game} from '../Game.js';

export class SimulationGame extends Game{
    constructor(simulationGameTax, revenueShare, name, year, price)
    {
        super(name, "Simulation", year, price);
        this.simulationGameTax = simulationGameTax;
        this.revenueShare = revenueShare;
    }

    calculateTotalPrice()
    {
        const price = this.getPrice();
        const tax = this.simulationGameTax.calculateTax(price);
        const revenue = (price + tax) * this.revenueShare;
        return price + tax + revenue;
    }

    getGameData()
    {
        const totalPrice = this.calculateTotalPrice();
        const type = this.getType();
        const tax = this.simulationGameTax.getTax();
        return {name: this.name, year: this.year, type: type, tax: tax, revenueShare: this.revenueShare, total: totalPrice};
    }
}