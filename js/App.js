import { GameBuilder } from "./games/GameBuilder.js";

export class App {
    inicialize(game)
    {
        const gameBuilder = new GameBuilder(game.name, game.year, game.genre);
        const gameBuilt = gameBuilder.buildGame();
        console.log(gameBuilt);
        const div = document.getElementById("classTest");
        let newDiv = document.createElement('div');
        newDiv.classList.add("gameItem");
        newDiv.innerHTML = `<p><b>Nome:</b> ${gameBuilt.name}</p><p><b>Ano:</b> ${gameBuilt.year}</p><p><b>Gênero:</b> ${gameBuilt.type}</p><p><b>Margem de Lucro:</b> ${gameBuilt.revenueShare}%</p><p><b>Imposto:</b> R$ ${gameBuilt.tax.toFixed(2).replace(".", ",")}</p><b>Total:</b> R$ ${gameBuilt.total.toFixed(2).replace(".", ",")}</p>`;
        div.appendChild(newDiv);
    }

    fetchData()
    {
        const gameData = new Promise((resolve) => {
            const data = fetch("./files/dummyGameData.txt");
            resolve(data);
        })

        gameData
            .then(res => {
                return res.json();
            })
            .then(res => {

                res.games.forEach((game) => {
                    this.inicialize(game);
                });
            })
            .catch((err) => {
                console.log(err.message);
            })
    }
}