// const isUserLoggedIn = true;
// if(2 == "2"){
//     console.log("excecuted");
// }

// const temperature = 41;

// if(temperature === 41){
//     console.log("tempertaure is so high ");
// }else{
// console.log("its not much high");
// }
// console.log("excecuted");

// const score = 200;

// if(score > 100){
//     var power = "fly"
//     console.log(`user power: ${power}`);
// }

// console.log(`user power:${power}`);


// const balance = 1000;

// if(balance > 500) console.log("high"),
// console.log("low");

// if(balance > 500){
//     console.log("higher then your amount");
// }else if(balance < 500){
//     console.log("it is in your amount");
// }else{
//     console.log("yes you will get discount");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard ){
    console.log("allow to buy a course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("yes you can login")
}