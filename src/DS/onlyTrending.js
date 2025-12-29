import bubbleSort from "./bubbleSort"

function onlyTrending() {

    const games = bubbleSort();
    const trendArr = [];

    for (const game of games) {
        if (game.rating >= 4) {
            trendArr.push(game);
        }
    }
    return trendArr;
}

export default onlyTrending