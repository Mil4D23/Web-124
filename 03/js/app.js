var $gameInfo = document.getElementById("gameInfo");
var $pcScore = document.getElementById("pcScore");
var $plScore = document.getElementById("plScore");
var $bgbody = document.getElementById("bgBody");
var $comicon = document.getElementById("comicon");
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
            $gameInfo.innerHTML = "Round Equal !";
            $comicon.innerHTML = "<i class='lar la-hand-paper text-warning la-3x'></i>"
            $bgbody.classList.add("bg-info");
            
        break;

        
        case 1 :
            $comicon.innerHTML = '<i class="las la-hand-rock text-warning la-3x"></i>'
            $gameInfo.innerHTML = "Nicccceee ! You Win This Round!";
            playerScore++;
            $bgbody.classList.add("bg-success");

        break;

        case 2 :
            $comicon.innerHTML = '<i class="lar la-hand-peace text-warning la-3x"></i>'

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
            $comicon.innerHTML = "<i class='lar la-hand-paper text-warning la-3x'></i>"
            comScore++;
            $bgbody.classList.add("bg-danger");

        break;

        
        case 1 :
            $comicon.innerHTML = '<i class="las la-hand-rock text-warning la-3x"></i>'
            
            $gameInfo.innerHTML = "Round Equal !";
            $bgbody.classList.add("bg-info");

        break;

        case 2 :
            $comicon.innerHTML = '<i class="lar la-hand-peace text-warning la-3x"></i>'

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
            $comicon.innerHTML = "<i class='lar la-hand-paper text-warning la-3x'></i>"
            playerScore++;
            $bgbody.classList.add("bg-success");

        break;
        
        case 1 :
            $comicon.innerHTML = '<i class="las la-hand-rock text-warning la-3x"></i>'

            $gameInfo.innerHTML = "You Loose ! Haahahahhah";
            comScore++;
            $bgbody.classList.add("bg-danger");
        break;

        case 2 :
            $comicon.innerHTML = '<i class="lar la-hand-peace text-warning la-3x"></i>'
            $gameInfo.innerHTML = "Round Equal !";
            $bgbody.classList.add("bg-info");

        break;

    }

    $pcScore.innerHTML = comScore;
    $plScore.innerHTML = playerScore;
    

}