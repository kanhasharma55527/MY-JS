// object litterals 

const mySym = Symbol("key1");
const jsUser = {
    name:"kanha",
    [mySym]:"key1",
    fullName: "kanha sharma",
    age: "19",
    location:"mathura",
    email:"kanha.google@gmail.com",
    isLogin:"false",
    LastLogin:["monday","sataurday"]

}
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["fullName"]);
// console.log(jsUser[mySym]);
//  jsUser.email = "kanha@gamil.com";
//  Object.freeze(jsUser);
//  jsUser.email = "kanhachatgpt@gmail.com";
//  console.log(jsUser);

jsUser.greeting = function(){
    console.log('hello js user, ${this.name}');
}
jsUser.greetingTwo = function(){
    console.log('hello js user, ${this.name}');
}
console.log(jsUser.greetingTwo());
console.log(jsUser.greeting());