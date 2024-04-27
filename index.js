//   Question no 1 

let number = 3.45214;
document.write("<h4>number: " + number + "<br>");
let round_off = Math.round(number);               // /round ya agr 3.5 sa uper to mtlb 4 and 3.5 sa kam to 3 
document.write("round off: " + round_off + "<br>");
let floor_val = Math.floor(number);                      //floor .ki values koo diminish krta hai 
document.write("floor value: " + floor_val + "<br>");
let ceil = Math.ceil(number);                         //ceil next integer present krta hai if 3 then result is 4 iirespective of .values
document.write("number: " + ceil + "</h4>");


//  Question no 2

let num_input = prompt("Please input a number");
let neg_num = num_input * -1;
document.write("<h4> number " + neg_num + "<br>")
document.write(" round off value " + Math.round(neg_num) + "<br>")
document.write(" floor value " + Math.floor(neg_num) + "<br>")
document.write(" ceil value " + Math.ceil(neg_num) + "</h4>")


// Question  no 3
let num_abs = -4                 //num_abs means=absolute value
let num_abs1 = 7
let num_abs2 = -49.2
document.write("<h4>the absolute value of " + num_abs + " is " + Math.abs(num_abs)+"<br>");
document.write("the absolute value of " + num_abs1 + " is " + Math.abs(num_abs1) + "<br>");
document.write("the absolute value of " + num_abs2 + " is " + Math.abs(num_abs2) + "</h4>");


// Questi0n nom 4               //first method function type 


function rolldice() {
    // Generate a random number between 1 and 6 (inclusive)
    var dice_value = Math.floor(Math.random() * 7) + 1;
    return dice_value;
}
// Example usage
var result1 = rolldice();                          //roll dice var ma save kiya taka function run krwasakan
document.write("<h4>random dice value: " + result1 +"<br>")
var result2 = rolldice();
document.write("random dice value: " + result2+"</h4>")


// Question no  5     //another method;

var random_val=Math.floor(Math.random()*2)+1;
let num1=1;
let num2=2;
if(random_val===num1){
     document.write("<h4>"+num1+"<br>"+"random coin value: Tails </h4>" );
     document.write("<h4>"+num2+"<br>"+"random coin value: Heads</h4>" );
    }else if(random_val===num2){
        document.write("<h4>"+num2+"<br>"+"random coin value: Heads</h4>" );
        document.write("<h4>"+num1+"<br>"+"random coin value: Tails</h4>" );
    }


// Question no 6


let random_num=Math.floor(Math.random()*100)+1;
document.write("<h4>random number between 1 and 100: "+ random_num+"</h4>");


// Question no 7

let user_input=prompt("Enter your weight in kilograms");
let parse=parseInt(user_input);
document.write("<h4>The weight of user is " +parse+ " Kilograms</h4>");


//  Question no 8

let guess_num=prompt("Enter a number between 1 to 10");
let secret_num=Math.floor(Math.random()*10)+1;
if(guess_num===secret_num){
    alert("congratulation you guess a correct number");
}else{
    alert("you guess a wrong number! The actual number is " + secret_num);
}
