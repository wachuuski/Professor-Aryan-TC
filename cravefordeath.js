function isPrime(input){
    if(input==2){
        return true;
    }
    for(let i = 2; i<input; i++){
        if (input % i == 0){
            return false;
        }
    }
    return true;
}
function findPrime(primePos){
    primes = new Array;
    let i = 1;
        while (primes.length < primePos){
            i++;
            if (isPrime(i)==true){
                primes.push(i);
            }

        }
    console.log(primes[primes.length-1]);
}
findPrime(10001);