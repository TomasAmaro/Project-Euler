var largestPalindrome = [];
var firstNumber = [];
var finalResult = 0;

function biggestNumber(a, b) {
    if (a > b) {
        return a;
    }
    return b;
}

for (var i = 100; i < 1000; i++) {
    for (var j = 100; j < 1000; j++) {
        var aux = i * j;
        firstNumber = aux.toString().split("");
        if (aux == firstNumber.reverse().join("")) {
            largestPalindrome.push(firstNumber.join(""));
        }
    }
}


console.log(Math.max.apply(Math,largestPalindrome));
