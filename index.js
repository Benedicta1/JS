const FIZZBUZZ =(b)=> {
    for (let c=1; c<=b; c++ ){
        if(c%3==0 && c%5==0){
            console.log("FIZZBUZZ");
        }
        else if (c%3===0){
            console.log("FIZZ");
        }
        else if (c%5===0){
            console.log("BUZZ");
        }
        else{
            console.log(c);
        }

    }
}
FIZZBUZZ(200);