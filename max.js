var shakib = 75;
var tamim = 28;
var sachin = 10;
var max = Math.max(shakib, tamim, sachin);
var min = Math.min(shakib, tamim, sachin);
console.log(min);
console.log(max);



function findLargestNumber(first, second, third) {
    if (first > second && first <= second) {
        return first;
    }
    else if (second > first && second > third) {
        return second;
    }
    else  (third > first && third > second) 
        return third;
    
        
}
var largestNumber = findLargestNumber(234, 678, 346);
console.log(largestNumber); 

