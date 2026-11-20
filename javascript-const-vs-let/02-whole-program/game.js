const MAX_LIVES = 3;
let hits = 0;

console.log("Game on!");
hits += 1;
hits += 1;
hits += 1;

const finalScore = hits * 10 + MAX_LIVES * 5;
console.log(hits);
console.log(finalScore);
