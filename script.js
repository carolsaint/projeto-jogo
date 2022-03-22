function choice(){
    tries = 2
    currentTry= 0

    while(tries >= currentTry){
        var answer = prompt("Choose the correct answer, from 1 to 4")
    
        if (answer == '4' && answer != null){
            alert("Correct!")
            window.location.assign("./9th-2.html");
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

