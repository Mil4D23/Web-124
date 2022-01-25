// var btnEvent = document.querySelectorAll(".num");
// console.log(btnEvent);

// function sum(){
//     btnEvent.click(){
//         console.log("aljfhlajkf");
//     }
// }

// document.querySelectorAll("button").onclick = function(){
//     console.log("mnabdfkjnadf");

//  queri index
// 1 num 7 / 2 num 8 / 3 num 9 / 4 plus
// 5 num 4 / 6 num 5 / 7 num 6 / 8 mines
// 9 num 1 / 10 num 2 / 11 num 3 / 12 zarb
// 13 num 0 / 14 momayez / 15 mosavi / 16 taghsim

// console.log(document.querySelectorAll("button"));

// var mylist = document.querySelectorAll("button");
// console.log(mylist[1]);
// console.log(mylist[2]);
// console.log(mylist[3]);
// console.log(mylist[4]);
// console.log(mylist[5]);
// console.log(mylist[6]);
// console.log(mylist[7]);
// console.log(mylist[8]);
// console.log(mylist[9]);
// console.log(mylist[10]);
// console.log(mylist[11]);
// console.log(mylist[12]);
// console.log(mylist[13]);
// console.log(mylist[14]);

// mylist[1].onclick = function {
// }
// console.log(mylist[1].onclick);

// function sum(){
    
// }
var $text = document.getElementById('text');
var count ;

var oldnum = 0;
var newnum = 0
$text.innerHTML = "";

var jar = document.querySelectorAll('button');
// console.log(jar);
var jat = Array.from(jar);
count = jar.forEach(function(element, index){
  count = element.onclick = function(){
        if(index == 1){
            $text.innerHTML += "7"
            return count+=7;
        }else if(index == 2){
            $text.innerHTML += "8"
            count+=8;
        }else if (index == 3){
            $text.innerHTML += "9"

            count+=9;
        }else if(index == 5){
            $text.innerHTML += "4"

            count+=4;
        }else if(index == 6){
            $text.innerHTML += "5"

            count+=5;
        }else if(index == 7){
            $text.innerHTML += "6"

            count+=6;
        }else if(index == 9){
            $text.innerHTML += "1"

            count+=1;
        }else if(index == 10){
            $text.innerHTML += "2"

            count+=2;
        }else if(index == 11){
            $text.innerHTML += "3"

            count+=3;
        }else if(index == 13){
            $text.innerHTML += "0"

            count+=0;
        }
        oldnum += count;
   }
})
console.log(oldnum);



