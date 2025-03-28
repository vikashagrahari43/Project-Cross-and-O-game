
let boxes = document.querySelectorAll(".box");
let reset = document.querySelectorAll(".reset");
let msg = document.querySelector("#msg");
let winmsg = document.querySelector(".winmsg");

let player0 =true;

const winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const resetbutton = ()=>{
    player0 =true;
    enablebox();
    winmsg.classList.add("hide");
    
}
const disablebox = ()=>{
    for(let box of boxes){
    box.disabled = true;
 
}}

const enablebox = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }}
boxes.forEach((box) => {
    box.addEventListener(("click"), ()=>{
        if(player0){
            box.innerText = "X";
            player0 =false;
        }
        else{
            box.innerText = "0";
            player0 =true;
        }
        box.disabled = true;
        checkwinner();
       
    })
    
})
const finalwinner = (win) =>{
    msg.innerText = `Congratulation ${win} is the winner`;
    winmsg.classList.remove("hide");
    disablebox();
}


const checkwinner = () =>{
    for(pattern of winpattern){
        let val1 = boxes[pattern[0]].innerText ;
        let val2 = boxes[pattern[1]].innerText ;
        let val3 = boxes[pattern[2]].innerText ;
        if(val1 != "" && val2 != "" && val3 != ""){
            if(val1 === val2 && val2 === val3 && val3=== val1){
                finalwinner(val1);
            }
        }
    }
}
reset[0].addEventListener(("click"), resetbutton);
reset[1].addEventListener(("click"), resetbutton);
reset[2].addEventListener(("click"), resetbutton);
