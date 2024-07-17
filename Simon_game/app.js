let userseq=[];
let gameSeq=[];
let level=0;
let start=true;
let Highest=0;
let btns=["pink","green","orange","purple"];
let p = document.querySelector("p");
let h2= document.querySelector("h2");
function flash(btn)
{
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);


}

function levelUp()
{
    userseq=[];
    level++;
    p.innerText="Level "+level;
    let btn_num=Math.floor(Math.random()*3);
    let color=btns[btn_num];
    let ranbtn = document.querySelector(`.${color}`);
    gameSeq.push(color);
    flash(ranbtn);
    
}

document.addEventListener("keypress",function()
{

    if(start==true)
    {
        start=false;
       levelUp();
    }
});

let press_btns=document.querySelectorAll(".box");
for(btn of press_btns)
{
    btn.addEventListener("click",function()
    {
       flash(this);
       let color=this.getAttribute("id");
       userseq.push(color);
       check(userseq.length-1);
       
    });
}

function check(index)
{
    
    if(userseq[index]==gameSeq[index])
    {
        if(userseq.length==gameSeq.length)
       setTimeout(levelUp,1000);
    }
    else
    {
        p.innerHTML="Game Over Your Score Is "+level+ "<br>Press Any key To Restart";
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor="white";
        }, 150);
        if(level>Highest)
        Highest=level;
        h2.innerText="Highest score : "+Highest;
        start=true;
        level=0;
        gameSeq=[];
        userseq=[];
    }
}