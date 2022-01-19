// (function(){
//     var $plScore = document.getElementById("plScore");
//     var $pcScore = document.getElementById("pcScore");
//     var $gameInfo = document.getElementById("gameInfo");
//     var pcScore = 0;
//     var plScore = 0;
//     var playerGuess = 0;

//     var computerList = ["paper", "rock", "scissors"];
//     var comGuess = Math.floor(Math.random()*3);

    

//     for(var i = 0 ; i < 5 ; i++){
//         var computerList = ["paper", "rock", "scissors"];
//         var comGuess = Math.floor(Math.random()*3);
//         var computerGuess = computerList[comGuess];
//         // creat computer Guess
//         console.log(comGuess);

//         Array.from(document.getElementsByClassName("btn-send-info")).forEach(function(element, index){
//             element.onclick = function(){
//                 playerGuess = index;
//                 console.log(playerGuess);
//             }
//         })
//         // console.log(playerGuess);
//         // console.log(computerGuess == playerGuess);
//         // creat Player Guess
//         if (computerGuess == playerGuess){
//             $gameInfo.innerHTML = "Round Drow !";
//         }else if (computerGuess == "paper" && playerGuess == "rock"){
//             $gameInfo.innerHTML = "Copmputer Win ! Haaahaaaahaaa";
//             pcScore +=1;
//         }else if (computerGuess == "paper" && playerGuess == "scissors"){
//             $gameInfo.innerHTML = "Niiiceee You Win";
//             plScore +=1;
//         }else if (computerGuess == "rock" && playerGuess == "scissors"){
//             $gameInfo.innerHTML = "Copmputer Win ! Haaahaaaahaaa";
//             pcScore +=1;
//         }else if (computerGuess == "rock" && playerGuess == "paper"){
//             $gameInfo.innerHTML = "Niiiceee You Win";
//             plScore +=1;
//         }else if (computerGuess == "scissors" && playerGuess == "paper"){
//             $gameInfo.innerHTML = "Copmputer Win ! Haaahaaaahaaa";
//             pcScore +=1;
//         }else if (computerGuess == "scissors" && playerGuess == "rock"){
//             $gameInfo.innerHTML = "Niiiceee You Win";
//             plScore +=1;
//         }

//         $pcScore.innerHTML = pcScore;
//         $plScore.innerHTML = plScore;


//     }
    




// })()

var $gameInfo = document.getElementById("gameInfo");
var $pcScore = document.getElementById("pcScore");
var $plScore = document.getElementById("plScore");
var $bgbody = document.getElementById("bgBody");

var comScore = 0;
var playerScore = 0;

var computerList = ["paper", "rock", "scissors"];
// paper was 0 - rock was 1 - scissors was 2
document.getElementById("paper").onclick = function(){
    var comGuess = Math.floor(Math.random()*3);
    $bgbody.classList.remove("bg-info");
    $bgbody.classList.remove("bg-danger");
    $bgbody.classList.remove("bg-success");

    switch(comGuess){
        case 0 :
            $gameInfo.innerHTML = "Round Drow !";
            $bgbody.classList.add("bg-info");
            
        break;

        
        case 1 :
            $gameInfo.innerHTML = "Nicccceee ! You Win This Round!";
            playerScore++;
            $bgbody.classList.add("bg-success");

        break;

        case 2 :
            $gameInfo.innerHTML = "You Loose ! Haahahahhah";
            comScore++;
            $bgbody.classList.add("bg-danger");

        break;

    }

    $pcScore.innerHTML = comScore;
    $plScore.innerHTML = playerScore;


}

// paper was 0 - rock was 1 - scissors was 2
document.getElementById("rock").onclick = function(){
    var comGuess = Math.floor(Math.random()*3);
    $bgbody.classList.remove("bg-info");
    $bgbody.classList.remove("bg-danger");
    $bgbody.classList.remove("bg-success");

    switch(comGuess){
        case 0 :
            $gameInfo.innerHTML = "You Loose ! Haahahahhah";
            comScore++;
            $bgbody.classList.add("bg-danger");

        break;

        
        case 1 :
            
            $gameInfo.innerHTML = "Round Drow !";
            $bgbody.classList.add("bg-info");

        break;

        case 2 :
            $gameInfo.innerHTML = "Nicccceee ! You Win This Round!";
            playerScore++;
            $bgbody.classList.add("bg-success");

            
        break;

    }

    $pcScore.innerHTML = comScore;
    $plScore.innerHTML = playerScore;
    

}

// paper was 0 - rock was 1 - scissors was 2
document.getElementById("scissors").onclick = function(){
    var comGuess = Math.floor(Math.random()*3);
    $bgbody.classList.remove("bg-info");
    $bgbody.classList.remove("bg-danger");
    $bgbody.classList.remove("bg-success");

    
    switch(comGuess){
        case 0 :
            $gameInfo.innerHTML = "Nicccceee ! You Win This Round!";
            playerScore++;
            $bgbody.classList.add("bg-success");

        break;
        
        case 1 :
            $gameInfo.innerHTML = "You Loose ! Haahahahhah";
            comScore++;
            $bgbody.classList.add("bg-danger");
        break;

        case 2 :
            $gameInfo.innerHTML = "Round Drow !";
            $bgbody.classList.add("bg-info");

        break;

    }

    $pcScore.innerHTML = comScore;
    $plScore.innerHTML = playerScore;
    

}