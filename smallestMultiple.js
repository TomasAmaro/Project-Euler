var divisibleNumber = 1;
var result = 1;
var aux = 0;


while (result > aux) {

  for (var i = 1; i < 10; i++) {
    divisibleNumber = 1;

        if(divisibleNumber % i === 0){
          result = divisibleNumber;
        }

        divisibleNumber++;


}
}
console.log(result);
