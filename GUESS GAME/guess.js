let btn=document.querySelector("button");

btn.addEventListener("click",function()
{
     let max=prompt("TELL YOUR MAX LIMIT");
     let count=1;
     guess(max,count);
});
   

function guess(max,count)
{
    let val=Math.floor(Math.random()*max);
    console.log(val);
     let guess=prompt("GUESS A NUMBER or Type 'QUIT' to quit the game");
    while(true)
    {
        if(guess==val)
        {
            if (count==1)
            alert("CONGRATULATIONS YOU GUESS THE NUMBER (" +val+")in 1st time ");
            else 
            alert("CONGRATULATIONS YOU GUESS THE NUMBER (" +val+")in "  + count+" times ");
           break;
        }
        if(guess==="QUIT")
        {
            alert("GAME OVER,YOU QUIT");
            break;

        }
        if(val<guess)

        {
            guess=prompt("GUESS AGAIN , YOUR GUESS IS LARGER THAN THE NUMBER");
            count=count+1;
        }
        if(val>guess)
        {
            guess=prompt("GUESS AGAIN , YOUR GUESS IS SMALLER THAN THE NUMBER");
            count=count+1;
        }
    }
    
}