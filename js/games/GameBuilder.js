import {ActionGame} from './genres/ActionGame.js';
import {ActionGameTax} from './taxes/ActionGameTax.js';
import {ShooterGame} from './genres/ShooterGame.js';
import {ShooterGameTax} from './taxes/ShooterGameTax.js';
import {HorrorGame} from './genres/HorrorGame.js';
import {HorrorGameTax} from './taxes/HorrorGameTax.js';
import {SimulationGame} from './genres/SimulationGame.js';
import {SimulationGameTax} from './taxes/SimulationGameTax.js';

export class GameBuilder {
    constructor(name, year, genre)
    {
        this.name = name;
        this.year = year;
        this.genre = genre;
    }

    buildGame()
    {
        if(this.genre == "action") {
            const actionGameTax = new ActionGameTax();
            const actionGame = new ActionGame(actionGameTax, 0.25, this.name, this.year, 155);
            const gameData = actionGame.getGameData();
            
            return gameData;
        } else if(this.genre == "shooter") {
            const shooterGameTax = new ShooterGameTax();
            const shooterGame = new ShooterGame(shooterGameTax, 0.25, this.name, this.year, 135);
            const gameData = shooterGame.getGameData();
            
            return gameData;
        } else if(this.genre == "horror") {
            const horrorGameTax = new HorrorGameTax();
            const horrorGame = new HorrorGame(horrorGameTax, 0.25, this.name, this.year, 105);
            const gameData = horrorGame.getGameData();
            
            return gameData;
        } else if(this.genre == "simulation") {
            const simulationGameTax = new SimulationGameTax();
            const simulationGame = new SimulationGame(simulationGameTax, 0.25, this.name, this.year, 85);
            const gameData = simulationGame.getGameData();
            
            return gameData;
        } else {
            throw new Error("Gênero desconhecido!");
        }
    }
}