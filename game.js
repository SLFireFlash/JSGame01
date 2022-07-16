const upick = document.getElementById("Upick")
const cpick = document.getElementById("Cpick")
const result = document.getElementById("Result")
const btns = document.querySelectorAll("button")
let BtnClick;
let RanNum;
let RES;
let RPC=["Rock","Paper","Scissor"];

btns.forEach(BTN =>BTN.addEventListener("click",(e) =>{
    BtnClick =e.target.id
    upick.innerHTML =BtnClick;
    
    NumGen();
    ResultGen();
    
}));

function NumGen()
{
    RanNum =Math.floor(Math.random()*3)
    cpick.innerHTML = RPC[RanNum];
}


function ResultGen()
{
    if (RPC[RanNum] === BtnClick)
    {
        RES ="draw";

    }
    //WHEN PC ROCK
    if(RPC[RanNum]=== "Rock" && BtnClick === "Paper")
    {
        RES ="You Win";
    }
    if(RPC[RanNum]=== "Rock" && BtnClick === "Scissor")
    {
        RES ="Computer Win";
    }

    //WHEN PC PAPER
    if(RPC[RanNum]==="Paper" && BtnClick ==="Rock")
    {
        RES ="Computer Win";
    }
    if(RPC[RanNum]==="Paper" && BtnClick ==="Scissor")
    {
        RES ="You Win";
    }

    //WHEN PC SCISSOR
    if(RPC[RanNum]==="Scissor" && BtnClick ==="Rock")
    {
        RES="You Win";
    }
    if(RPC[RanNum]==="Scissor" && BtnClick ==="Paper")
    {
        RES="Computer Win";
    }
    result.innerHTML =RES;

}