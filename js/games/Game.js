export class Game {
    
    constructor(name, type, year, price)
    {
        this.name = name;
        this.type = type;
        this. year = year;
        this.price = price;
    }

    getName ()
    {
        return this.name;
    }

    setName (name)
    {
        this.name = name;
    }

    getType()
    {
        return this.type;
    }

    setType(type)
    {
        this.type = type;
    }

    getYear()
    {
        return this.year;
    }

    setYear(year)
    {
        this.year = year;
    }

    getPrice()
    {
        return this.price;
    }

    setPrice(price)
    {
        this.price = price;
    }
}