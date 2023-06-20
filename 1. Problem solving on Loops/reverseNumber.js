
function reverseNumber(number){
    let reversedNumber = 0;
    let digitSum = 0;

    while(number > 0){
        let digit = number % 10;
        reversedNumber = ( reversedNumber * 10) + digit;
        digitSum += digit;
        number = Math.floor(number / 10);
    }

    console.log("Reversed Number: " + reversedNumber);
    console.log("Sum of digits: " + digitSum);
}

reverseNumber(1234);