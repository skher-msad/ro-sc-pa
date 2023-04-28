/* 
1 - get elements from documnet.page

2 - create rules of game

3 - function for step game
*/

/* get elements from document.page */

let elmentpage = document.querySelector(".index-game .section-game > .elment-game")

let elmentgame = Array.from(document.querySelectorAll(".index-game .section-game > .elment-game > div"))

,number_of_gamer = document.querySelector(".index-game .section-game > .heder-section > .number-gamer > span:last-of-type")

,showRules = document.querySelector(".index-game > .rules > span")

,menurules = document.querySelector(".index-game > .rules-game")

,opacity = document.querySelector(".index-game > .opasity")

,closerules = document.querySelector(".index-game > .rules-game > span > img")

,pickedElement = Array.from(document.querySelectorAll(".index-game .section-game > .options-element > div > div"))

,value_game = document.querySelector(".index-game .section-game > .options-element > span.finale")

,value_game1 = document.querySelector(".index-game .section-game > .options-element > span.finale > span:first-of-type")

,picked_page = document.querySelector(".index-game .section-game > .options-element")

,picked_page_span = Array.from(document.querySelectorAll(".index-game .section-game > .options-element > div > span"))

,click_replay = document.querySelector(".index-game .section-game > .options-element > span.finale > span:last-of-type")

,randoum = ""

,number_cont = 0


/* create opject for rules */
const rules = {
    rock : "scissors"
    ,paper: "rock"
    ,scissors : "paper"
}

// show roles of game
showRules.onclick = () =>{
menurules.classList.add("active")

opacity.classList.add("active")
}

// hide the rules of game
closerules.onclick = () =>{
    menurules.classList.remove("active")

    opacity.classList.remove("active")
}

// start the game when click on => rocke,paper,scissors
elmentgame.forEach((g) =>{
    g.addEventListener("click",()=>{
        randoum = Math.floor(Math.random() * 3)// choose a  random to the game items

        pickedElement[0].firstElementChild.lastElementChild.src = g.firstElementChild.src// image of your choice

        pickedElement[1].firstElementChild.lastElementChild.src = elmentgame[randoum].firstElementChild.src// image of a random choice

        pickedElement[0].title = g.firstElementChild.title// title of your choice

        pickedElement[1].title  = elmentgame[randoum].firstElementChild.title// title of a random choice

        elmentpage.classList.add("active")// remove the main game items

        picked_page.classList.add("active")// show the selected elements

        rulesgame()
        addnumberplayer()
    })
})


/* function of steps game */
function rulesgame(){

    //remove all active of the page
    value_game.classList.remove("finesh-1")

    picked_page.children[0].classList.remove("option")

    picked_page.children[2].classList.remove("option")

    picked_page_span.forEach((s) => s.classList.remove("space"))

    pickedElement[0].classList.remove("win")

    value_game.classList.remove("finesh-2")

    pickedElement[1].classList.remove("win")

// check if the selected element never equal the random choice
if(pickedElement[0].title !== pickedElement[1].title){

    // check if the selected elements => true
    if(rules[pickedElement[0].title] === pickedElement[1].title){
        
        // add active to the game items
        value_game.classList.add("finesh-1")

        picked_page.children[0].classList.add("option")

        picked_page.children[2].classList.add("option")

        picked_page_span.forEach((s) => s.classList.add("space"))

        value_game1.innerHTML = "YOU WIN"

        pickedElement[0].classList.add("win")
    }else{
        value_game.classList.add("finesh-2")

        value_game1.textContent = "YOU LOSE"

        pickedElement[1].classList.add("win")
    }
}

// check if the selected elements => false
else{
    value_game.classList.add("finesh-2")
    value_game1.innerHTML = ""
}

}

// click of replay the game
click_replay.onclick = () =>{
    elmentpage.classList.remove("active")

    picked_page.classList.remove("active")
}

//number of the player win
function addnumberplayer(){

    if(pickedElement[0].classList.contains("win")){
        number_cont++
    }

    else if(pickedElement[1].classList.contains("win")){
        number_cont--
    }

    number_cont <= 0 ? number_cont = 0:""

    number_of_gamer.innerHTML = number_cont
}