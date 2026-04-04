// const user = {
//     username : "kanha",
//     price : 999,
//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`)
//     }
// }

// user.welcomeMessage();
// user.username = "hello"
// user.welcomeMessage();

// console.log(this.username);

// function chai(){
//     console.log(this);
// }
// chai();

// const chai = function(){
//     let username = "kanha"
//     console.log(this.username)
// }
// chai();

// const chai = () => {
//     let username = "kanha"
//     console.log(this.username);
// }
// chai();

// const addtwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addtwo(3,4));

// const addtwo = (num1,num2) => (num1 + num2);
// console.log(addtwo(3,5));

const addtwo = (num1,num2) => ({username:"kanha"});
console.log(addtwo(3,4));