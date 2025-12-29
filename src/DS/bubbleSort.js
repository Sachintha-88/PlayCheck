import GameArray from "../Arrays/GameArray"

function bubbleSort() {
    const games = GameArray();
    const sortGames = [];
    
    for (const game of games) {
        if (game.rating == 5) {
            sortGames.push(game);
        }
    }
    for (const game of games) {
        if (game.rating == 4) {
            sortGames.push(game);
        }
    }
    for (const game of games) {
        if (game.rating == 3) {
            sortGames.push(game);
        }
    }
    for (const game of games) {
        if (game.rating == 2) {
            sortGames.push(game);
        }
    }
    for (const game of games) {
        if (game.rating == 1) {
            sortGames.push(game);
        }
    }
    for (const game of games) {
        if (game.rating == 0) {
            sortGames.push(game);
        }
    }
    return sortGames;
}

export default bubbleSort;