function choice1(){
    tries = 2
    currentTry= 0

    while(tries >= currentTry){
        var answer = prompt("Choose the correct answer, from 1 to 4")
    
        if (answer == '1' && answer != null){
            alert("Correct!")
            window.location.assign("./11th-2.html");
            break
        } else if (answer != "1"){
            if (tries > 0) {
                alert("Try again");
                tries--;
                window.location.assign("./gameover.html");
        }
        currentTry++
         }
    }
}


function choice2(){
    tries = 2
    currentTry= 0

    while(tries >= currentTry){
        var answer = prompt("Choose the correct answer, from 1 to 4")
    
        if (answer == '4' && answer != null){
            alert("Correct!")
            window.location.assign("./11th-3.html");
            break
        } else if (answer != "4"){
            if (tries > 0) {
                alert("Try again");
                tries--;
                window.location.assign("./gameover.html");
        }
        currentTry++
         }
    }
}

function choice3(){
    tries = 2
    currentTry= 0

    while(tries >= currentTry){
        var answer = prompt("Choose the correct answer, from 1 to 4")
    
        if (answer == '2' && answer != null){
            alert("Correct!")
            window.location.assign("./victory.html");
            break
        } else if (answer != "2"){
            if (tries > 0) {
                alert("Try again");
                tries--;
                window.location.assign("./gameover.html");
        }
        currentTry++
         }
    }
}
