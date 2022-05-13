// set the elements that I want to change, which are the text for the turn and the squares inside the div 
const smallBox = document.querySelectorAll(".small-box");
const turnText = document.querySelector("#player-turn");

// set the turn count to 0
let clickCount = 0;

// since i have an array of the square, so I have to loop through each one to add the event listener
smallBox.forEach((box) => {
    // add a new key "clicked" with value of false to the square, so that i know if i clicked the square box or not.
    box.clicked = false;

    // for each square, add the event listener
    box.addEventListener("click", () => {
  
        // set a if statement for the turn count. If the count is even, then it is player pink(one)'s turn; else it is the player yellow(two)'s turn
        if (clickCount % 2 == 0) {

            // 1. if the box is not clicked, then I will change the box to pink color.
            // 2. add the click count, so that the turn will switch
            // 3. then the div is clicked
            // 4. set the attribute so that pink so that I can use the attribute to check winning condition
            // 5. set the innerText to the next player's turn
            if (box.clicked == false) {
                box.style.backgroundColor = "#f28482";
                clickCount ++;
                box.clicked = true;
                box.setAttribute("class","small-box pink");
                turnText.innerText = "Player yellow's turn"

                // check for the win and check even
                checkWin("pink")
                checkEven();
            } else {
                console.log("this box is been clicked");
            }

            
            // else statement for player yellow(two)'s turn
        } else {
            if (box.clicked == false) {

                // same thing for the player yellow(two)'s turn
                box.style.backgroundColor = "#f6bd60";
                clickCount ++
                box.clicked = true
                box.setAttribute("class","small-box yellow");
                turnText.innerText = "Player pink's turn"

                checkWin("yellow");
                checkEven();
            } else {
                console.log("this box is been clicked");
            }
        }
    })
})

// set the reset button to a variable, the button will run reset function when clicked
const resetButton = document.querySelector("#reset-button")
resetButton.addEventListener("click", () => {
    reset();
})


// this is the function to check wins base on the color of the player
const checkWin = (color) => {

    // i will check the class of each box that i have, if some of them have the same color attribute, the player will will.
    // this process will repeat 8  times because there are 8 conditions
    if (smallBox[0].classList.value == `small-box ${color}` && smallBox[1].classList.value == `small-box ${color}` && smallBox[2].classList.value == `small-box ${color}`) {
        alert(`Player ${color} wins!!!!`);
        reset();
    };
    if (smallBox[3].classList.value == `small-box ${color}` && smallBox[4].classList.value == `small-box ${color}` && smallBox[5].classList.value == `small-box ${color}`) {
        alert(`Player ${color} wins!!!!`);
        reset();
    };
    if (smallBox[6].classList.value == `small-box ${color}` && smallBox[7].classList.value == `small-box ${color}` && smallBox[8].classList.value == `small-box ${color}`) {
        alert(`Player ${color} wins!!!!`);
        reset();
    };
    if (smallBox[0].classList.value == `small-box ${color}` && smallBox[3].classList.value == `small-box ${color}` && smallBox[6].classList.value == `small-box ${color}`) {
        alert(`Player ${color} wins!!!!`);
        reset();
    };
    if (smallBox[1].classList.value == `small-box ${color}` && smallBox[4].classList.value == `small-box ${color}` && smallBox[7].classList.value == `small-box ${color}`) {
        alert(`Player ${color} wins!!!!`);
        reset();
    };
    if (smallBox[2].classList.value == `small-box ${color}` && smallBox[5].classList.value == `small-box ${color}` && smallBox[8].classList.value == `small-box ${color}`) {
        alert(`Player ${color} wins!!!!`);
        reset();
    };
    if (smallBox[0].classList.value == `small-box ${color}` && smallBox[4].classList.value == `small-box ${color}` && smallBox[8].classList.value == `small-box ${color}`) {
        alert(`Player ${color} wins!!!!`);
        reset();
    };
    if (smallBox[2].classList.value == `small-box ${color}` && smallBox[4].classList.value == `small-box ${color}` && smallBox[6].classList.value == `small-box ${color}`) {
        alert(`Player ${color} wins!!!!`);
        reset();
    };
};


const checkEven = () => {
    // for each box check the click count if the click count is 9 and no one is winning then it is even.
    if (clickCount >= 9) {
        alert("Tie!")
        reset()
    };
};




// reset the things that I change for the buttons that I clicked
const reset = () => {
    smallBox.forEach((box) => {
        clickCount = 0;
        box.style.backgroundColor = "#f1faee";
        box.setAttribute("class","small-box");
        box.clicked = false
        turnText.innerText = "Player pink's turn"
    });
};