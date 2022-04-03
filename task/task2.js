/*Problem no1
1.Will alert be shown?
//-->Yes alert will shown because,
when we give string values to if condition i.e string "0" it will consider 
it as a true value & it will show the o/p.
if ("0") {
  alert( 'Hello' );
}*/


//Problem no2
let NUMBER=Number(prompt("enter number"))
if(NUMBER>0){
    alert("+1")
}
else if(NUMBER<0){
    alert("-1")
}
else if(NUMBER=0){
    alert("0")
}

//3.Creat grade calculator app
let per=20
let grade

if (per>=90){

  console.log("grade will be A")

}
else if (per>=80){

  console.log("grade will be B")

}
else if (per>=70){

  console.log("grade will be C")

}

else if (per<40){

  console.log("!..student is failed..!")

}
