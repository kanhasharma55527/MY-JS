const marvel = ["iron-man","spider-man","hulk"];
const dc = ["flash","batman","wonder-woman"];
// marvel.push(dc);
// console.log(marvel);

// const allHeroes = marvel.concat(dc);
// console.log(allHeroes);

const all_new_heros =[...marvel,...dc];
//console.log(all_new_heros);

const another_array = [1,2,3[4,5,6],7[8,9]];
// console.log( another_array);
const real_another_array = another_array.flat(Infinity);
//console.log(real_another_array);

// console.log(Array.isArray("kanha"));
// console.log(Array.from("kanha"));
// console.log(Array.from({name:"kanha"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(score1,score2,score3);