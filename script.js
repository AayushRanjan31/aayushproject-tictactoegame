let startthe = document.querySelector(".started")
let showthe = document.querySelector(".showthegame")
function startgame(){
        startthe.classList.add("hide");
        showthe.classList.remove("hide");
}


/* Game pannel */

let boxes = document.querySelectorAll(".box");
let turnx = true;
boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
        if (turnx) {
            box.innerHTML = "X";
            turnx = false;
        }
        else {
            box.innerHTML = "O";
            turnx = true;
        }
        box.disabled = true;
        checkWin();
    })
})

const winlist = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

function checkWin() {
    for(pattern of winlist){
        let pos1 =   boxes[pattern[0]].innerText
        let pos2 =   boxes[pattern[1]].innerText 
        let pos3 =   boxes[pattern[2]].innerText

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showwinner(pos1);
            }
        }
    }
}

let disabledboxes = ()=>{
    for(let box of boxes) {
        box.disabled = true;
    }
}

var disp = document.querySelector('.container')
function hideeinner() {
    disp.classList.add("hide");
    resetbtn.classList.add("hide");
}

let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
function showwinner(winner) {
    disabledboxes();
    hideeinner();
    msg.innerText = `${winner}`;
    msgcontainer.classList.remove("hide");
}

let enabledboxes = ()=>{
    for(let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }
}

let resetbtn = document.querySelector("#reset");

let resetgame = ()=> {
    turnx = true;
    enabledboxes();
    msgcontainer.classList.add("hide");
    disp.classList.remove("hide");
    resetbtn.classList.remove("hide");
}

let newgamebtn = document.querySelector("#newgame");

newgamebtn.addEventListener("click",resetgame);

resetbtn.addEventListener("click",resetgame);