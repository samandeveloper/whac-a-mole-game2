const scoreBoard = document.querySelector(".score")
const holes = document.querySelectorAll(".hole")     
const moles = document.querySelectorAll(".mole")

let lastHole;
let timeUp = false;
let score = 0;
let hole
//random timer for mole to pop from the hole
function randomTime(min , max){
    return Math.round(Math.random()*(max-min)+min)  //integer random number between min (included) and max (not included)
}

//select random hole
function randomHole(holes){
    const index = Math.floor((Math.random()*holes.length))
    hole = holes[index] 
}

//mole comes up 
function peep(){
    const time = randomTime(500 , 1000)       //time that each more comes up and goes down
    randomHole(holes)
    hole.classList.add("up")        //add the css class so selected mole can pop up

    setTimeout(() => {              //end the game after a random time
        hole.classList.remove("up")
        if(!timeUp){                //to repeat the moles coming up and down
            peep()
        }
    }, time)
}

function startGame(){
    scoreBoard.textContent = 0;
    timeUp = false
    score = 0
    peep()
    setTimeout(() => {      //this is the duration of the game--show random moles for 15 seconds
        timeUp = true
    },15000);
}

moles.forEach(function(mole){
    mole.addEventListener("click" , function(e){
        if(e.isTrusted){        //if user clicked on the mole
            score++
            scoreBoard.innerHTML = score
        }
    })
})