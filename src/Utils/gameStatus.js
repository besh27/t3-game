const adjectives = [
    "n amazing",
    "n awesome",
    " bodacious",
    " crazy",
    " righteous",
    " tubular",
    "n unbelieveable",
    "n out-of-this-world"
];

const random = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)]
}

const gameStatus = (turns, arr) => {
    if (arr[0] === arr[3] && arr[3] === arr[6] && arr[0] !== '') {
        return `In ${turns} moves, ${arr[0]} won with a${random(adjectives)} vertical Move!`
    };
    if (arr[1] === arr[4] && arr[4] === arr[7] && arr[1] !== '') {
        return `In ${turns} moves, ${arr[1]} won with a${random(adjectives)} vertical Move!`
    };
    if (arr[2] === arr[5] && arr[5] === arr[8] && arr[8] !== '') {
        return `In ${turns} moves, ${arr[2]} won with a${random(adjectives)} vertical Move!`
    };
    if (arr[0] === arr[1] && arr[1] === arr[2] && arr[0] !== '') {
        return `In ${turns} moves, ${arr[0]} won with a${random(adjectives)} horizontal Move!`
    };
    if (arr[3] === arr[4] && arr[4] === arr[5] && arr[3] !== '') {
        return `In ${turns} moves, ${arr[3]} won with a${random(adjectives)} horizontal Move!`
    };
    if (arr[6] === arr[7] && arr[7] === arr[8] && arr[6] !== '') {
        return `In ${turns} moves, ${arr[6]} won with a${random(adjectives)} horizontal Move!`
    };
    if (arr[0] === arr[4] && arr[4] === arr[6] && arr[0] !== '') {
        return `In ${turns} moves, ${arr[0]} won with a${random(adjectives)} diagonal Move!`
    };
    if (arr[2] === arr[4] && arr[4] === arr[6] && arr[2] !== '') {
        return `In ${turns} moves, ${arr[2]} won with a${random(adjectives)} diagonal Move!`
    };
    return 'keep playing';
}

export default gameStatus;