//for 

// for(let i = 0; i <= 10; i++){
//     const elemnt = i;
//     console.log(elemnt);
// }


for(let i = 0; i <= 10; i++){
    const elemnt = i;
    if(elemnt == 5){
        console.log("we got 5");
    }
    console.log(elemnt);
}

// for(let i = 1; i <= 10; i++){
//     console.log(`outer loop value is ${i}`);
//     for(let j = 0 ; j <= 10; j++){
//         // console.log(`inner loop value is ${j} and inner loop value is ${i}`);
//         console.log(i + "*" + j + "=" + i*j);
//     }
// }


// let myArray = ["ironman", "spiderman" , "hulk" , "thor"];
// for(let i = 0 ; i < myArray.length; i++){
//     console.log(myArray.length);
//     const element = myArray[i];
//     console.log(element);
// }


for(let i = 0 ; i <= 20; i++){
    if(i == 5){
        console.log("we got 5");
        continue;
    }
    console.log(`value of i is ${i}`);
}