// var name1 = "Mahbob mama ";
// console.log(name1);
// var nayikas = ["opu", " purnima", " mahi", "pori"];
// console.log(nayikas.length);
// var naiyikasNumber = nayikas.length;
// console.log(naiyikasNumber);
// console.log(6 !=6);
// var isFoodReady = false;
// if (isFoodReady == true) {
//     console.log("i will eat");
// }

// var tableLength = 12;
// var tourDestination = ['nepal', " bhutan", ' thailand ', ' Australia'];
// // console.log(tourDestination);
// tourDestination.indexOf('bhutan');
// tourDestination[1] = 'Srilanka';
// tourDestination.push('London');
// // tourDestination.pop()
// console.log(tourDestination);

 
// var roastGiven = 0;
// while (roastGiven < 7) {
   
//     console.log("Roast den", "khabo");
//     roastGiven++;
//     console.log(roastGiven)

// }
 
// function

// function startFootball() {
//     console.log("Hello Messi");
// }
// startFootball();
// console.log("Hello Ronaldo");
// startFootball(); 
// console.log("Hello shakib");
// startFootball(); 
// function singaraKhabo(taka) {
//     console.log("taka nen mama", taka);
//     console.log("mama singara den");
//     var singaraPrice = 10;
//     var singaraQuantity = taka / singaraPrice;
//     return singaraQuantity;
// }
// var money = 250;
// var singara = singaraKhabo(money);
// console.log("Ei nen singara", singara);
// function addNumber(number1, number2) {
//     var total = number1 + number2;
//     return total;

// }

// var result = addNumber(90,67);
// console.log('add value:', result);

// function multiplyNumber(number3, number4) {
//     var total = number3 * number4;
//     return total;
// }
// var result = multiplyNumber(6, 100);
// console.log("multiply value: ", result);

// function subNumber(number1, number2) {
//     var total = number1 - number2;
//     return total;

// }

// var result = subNumber(90,67);
// console.log('sub value:', result);

// var computer = {
//     price: 100000,
//     storage: '256',
//     color: 'black',
//     processor:'core i7'
// }
// console.log(computer.price);
// var computerProcessor = computer.processor;
// console.log(computerProcessor);
// computer.storage = 516;
// console.log(computer.storage);
// var computerStorage = "storage";
// computer.computerStorage = 2048;
// computer[computerStorage] = '1024gb';
// console.log(computer.computerStorage);
// console.log(computer);
// var color = 'yellow';
// switch (color) {
//     case 'black':
//         console.log('color is black');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'green':
//         console.log('color is green');
//         break;
//     case 'yellow':
//         console.log('color is yellow');
//         break;
//     default:
//         console.log('color is white');
// }

// var js = 0;
// while (js < 10) {
//     console.log(js);
//     if (js == 5) {
//         break;
//     }
//     js++;
// }
function getReminder(number1, number2) {
    var total = number1 % number2;
    return total;
}

const reminder = getReminder(12, 2);

console.log(reminder);
