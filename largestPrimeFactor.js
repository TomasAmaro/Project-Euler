//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143 ?

var limitNumber = 600851475143;
var primeNumbers = [];

for (var i = 2; i < Math.sqrt(limitNumber) ; i++) {

    if (limitNumber % i === 0) {
        var aux = 0;

        for (var j = 2; j < i; j++) {
            if (i % j === 0) {
                aux = i;
                break;
            }
        }
        if (aux !== i) {
            primeNumbers.push(i);
        }
    }

}
console.log(primeNumbers);
