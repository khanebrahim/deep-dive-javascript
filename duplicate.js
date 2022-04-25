// const names = ['Kalim', 'molim', 'jolim', 'rahim', 'salim', 'hamil', 'rajim','Kalim','hamil','jolim'];

// function removeDuplicates(names) {
//     const unique = [];
    // for (let i = 0; i < names.length; i++) {
    //     const element = names[i];
        // console.log(element);
//         for (const element of names) {
//             console.log(element);
//             if (unique.indexOf(element) == -1) {
//                 unique.push(element);
//             }
//         }
//     return unique;
//     }
// const uniqueNames = removeDuplicates(names);
// console.log(uniqueNames);

const myArray = [12, 45, 67, 36, 89, 56, 27];
console.log(myArray.length);
console.log(myArray[2]);

// my String
const myString = 'hello how are you';
console.log(myString.length);
for (const element of myArray) {
    console.log(element);
}

const greetings = 'My name is Ebrahim Iqbal Khan';
function reverseString(text) {
    let reverse =""
    for (const letter of text){
        console.log(letter);
        reverse = letter + reverse
    }
}

const reversed = reverseString(greetings);
console.log(reversed);