//if else statement

var age =20;

if(age >= 65){
    console.log("You get your income form your pension");
} else if( age < 65 && age >= 18) {
    console.log("each month you get a salary");
} else if( age < 18){
    console.log("You get an allowance");
} else{
    console.log("The value of the age variable is not numerical");
}


// switch statement

var day = "Sunday";

switch(day){
    case "Monday":
        console.log("Frist day of the week");
        break;
    case "Tuesday":
        console.log("Second day of the week");
        break;
    case "Thrusday":
            console.log("Third day of the week");
            break;
    case "Friday":
            console.log("Fourth day of the week");
            break;
    case "Saturday":
            console.log("Fith day of the week");
            break;
    case "Sunday":
        console.log("Sixth day of the week");
        break;
    default:
        console.log("There is no such day");
}