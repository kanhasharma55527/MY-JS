// function sayMyNmae(){
//     console.log("k");
//     console.log("A");
//     console.log("N");
//     console.log("H");
//     console.log("A");
// }
// sayMyNmae();

// function addTwoNumbers(Number1,Number2){
//     // console.log(Number1 + Number2)
//     let result = Number1 + Number2;
//     console.log("kanha sharma");
//     return result;
    
// }
// addTwoNumbers(9,"7");
// const result =  addTwoNumbers(9,7);

// console.log("result",result);


function loginUserMessage(username){
    if(!username)(username === undefined){
        console.log("please enetr a username");
        return 
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("kanha"));