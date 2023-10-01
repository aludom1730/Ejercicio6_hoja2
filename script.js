const firstUserNumber = parseInt(prompt("Dame un numero: "));
let secondUserNumber = parseInt(prompt("Dame un segundo numero. Tiene que ser superior al primero"));
let isFirstNumberIsGreatThanSecondNumber = firstUserNumber >= secondUserNumber;
while(isFirstNumberIsGreatThanSecondNumber){
    secondUserNumber = parseInt(prompt(`Te has equivocado, el primero (${firstUserNumber}), era mayor que el segundo (${secondUserNumber}).Vuelve a introducir el segundo`));
    isFirstNumberIsGreatThanSecondNumber = firstUserNumber >= secondUserNumber; 
}
let nextNumber = firstUserNumber + 1;
let isNextNumberLessThanSecondNumber = nextNumber < secondUserNumber;
let isNextNumberOdd;
while(isNextNumberLessThanSecondNumber){
    isNextNumberOdd = nextNumber%2!=0
    if(isNextNumberOdd)console.log(nextNumber);
    nextNumber++;
    isNextNumberLessThanSecondNumber = nextNumber < secondUserNumber;
};