// function arrayTotal(numbers) {
//     sum = 0;
//     for (let i = 0; i < numbers.length; i++){
//         const element = numbers[i];
//         sum += element;
//     }
//     return sum;
// }
// const totalArray = arrayTotal([23,34, 45, 67]);
// console.log(totalArray);

function smallestElement(numbers) {
    let min = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        // console.log(element);
        if (element < min) {
            min = element;
        }
            
        return numbers;
    }
}
const choArray = smallestElement([ 94, 56, 76, 35, 12]);
console.log(choArray);