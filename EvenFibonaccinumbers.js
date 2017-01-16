var currentNumber = 1;
var lastNumber = 0;
var limit = 4000000;
var evenSum = 0;

var sequence = [0];
    
function increase (last, current){
     return current + last; 
    }



    while(sequence[sequence.length-1] <= limit){
        tempNumber = increase(lastNumber,currentNumber) 
        sequence.push(tempNumber);
        lastNumber = currentNumber; 
        currentNumber = sequence[sequence.length-1];
        if (currentNumber % 2 === 0){
            evenSum += currentNumber;
            console.log(evenSum);
        }
    }