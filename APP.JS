let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGameBtn =document.querySelector("#new-btn");
let msgContainer =document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;
let WinningPattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],
[0,4,8],[2,4,6]];


boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        check_Winner();
    });   
});

const disableBoxes =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes =()=>{
    for(let box of boxes){
        box.disabled=true;
        box.innerText = "";
    }
}
const reset_game =()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");

}

const showWinner =(winner) =>{
    msg.innerText=`Congratulations,winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const check_Winner=()=>{
    for(let pattern of WinningPattern){
        let pos1val1=boxes[pattern[0]].innerText;
        let pos2val2=boxes[pattern[1]].innerText;
        let pos3val3=boxes[pattern[2]].innerText;

        if(pos1val1 !=="" && pos2val2 !=="" && pos3val3 !==""){
            if(pos1val1===pos2val2 && pos2val2===pos3val3){
                showWinner(pos1val1);
            }
        }
    }
};

new_btn.addEventListener("click",reset_game);
resetbtn.addEventListener("click",reset_game);



