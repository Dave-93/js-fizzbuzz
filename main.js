const fizz = "Fizz";
const buzz = "Buzz";

for (let i = 1; i <= 100; i++) {

    const modThree = i % 3;
    const modFive = i % 5;
    
    if(modThree == 0 && modFive == 0){
        console.log(fizz+buzz);
    }else if(modThree == 0){
        console.log(fizz);
    }else if(modFive == 0){
        console.log(buzz);
    }else{
        console.log(i);
    }
}