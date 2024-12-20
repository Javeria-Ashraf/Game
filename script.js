let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#new-btn");
let mesg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let turnO = true;

const winPattern =[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            box.style.color="#200ded";
           turnO = false;
        } else{
            box.innerText = "X";
            box.style.color="#c0241c";
            turnO = true;
        }
        box.disabled=true;
        checkWin();
        
    });
});
  
let disableBox = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

let showWinner = (winner) =>{
 mesg.innerText =`Congratulations,Winner is ${winner}`;
 msgContainer.classList.remove("hide");
 disableBox ();
}

const checkWin = ( () => {
    for(let pattern of winPattern) {

           let pos1 = boxes[pattern[0]].innerText;
           let pos2 =  boxes[pattern[1]].innerText;
           let pos3 = boxes[pattern[2]].innerText;

           if(pos1 != "" && pos2 != "" && pos3 != "" ){
            if(pos1 == pos2 && pos2 == pos3){
                showWinner(pos1);
            }
           }
    }
});

let enableBox = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}

const resetButton = () =>{
    let turnO = true;
    enableBox();
    msgContainer.classList.add("hide");
}

newBtn.addEventListener("click", resetButton);
resetBtn.addEventListener("click",resetButton);