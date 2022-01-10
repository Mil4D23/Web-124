function timeCheack () {
    var time = document.getElementById("timeValu").value;

    time = parseInt(time);

    var html = document.getElementById("outpot");
    html.innerText = "";
    if(time <1 || time >24){
        html.innerText = "Your Time Must be 1 and 24 ! Thanks";
    }else if (time >= 8 && time <10 ){
        html.innerText = "Wake Up";
    }else if(time >= 10 && time < 12 ){
        html.innerText = "Go To Work";
    }else if(time >= 12 && time < 13 ){
        html.innerText = "Lunch";
    }else if(time >= 13 && time < 17 ){
        html.innerText = "Go To Work";
    }else if(time >= 17 && time < 19 ){
        html.innerText = "Gym";
    }else if(time >= 19 && time < 20 ){
        html.innerText = "Dinner Time";
    }else if(time >= 20 && time < 22 ){
        html.innerText = "Watch Tv";
    }else if(time >= 22 && time < 23  ){
        html.innerText = "Time To Go To Sleep";
    }else if(time >= 23 || 1 < time < 8 || time == null ){
        html.innerText = "You Should Be Sleeping !";
    }
}

AOS.init();