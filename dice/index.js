let btn=document.querySelector("button");
let val=document.querySelector("select");
let div=document.querySelector("div");
let btn1=document.querySelector(".button");
let par=document.querySelector("h3");
btn.addEventListener("click",function()   
{
    let num=val.value;

    for(let i=0;i<num;i++)
    {
        let image=document.createElement("img");
        let name=`image_${i}`;
        image.setAttribute("id",name);
        let val=Math.floor(Math.random()*6)+1;
        image.src=`${val}.jpg`;
        div.appendChild(image);
        
    }
   
});


btn1.addEventListener("click",function()
{
    let num=val.value;
    let sum=0;
    for(let i=0;i<num;i++)
    {
        let name=`image_${i}`;
        let image=document.getElementById(name);
        setTimeout(function(){
        let val=Math.floor(Math.random()*6)+1;
        image.src=`${val}.jpg`;
        },100);
        setTimeout(function(){
        let val=Math.floor(Math.random()*6)+1;
        image.src=`${val}.jpg`;
        },200);
        setTimeout(function(){
        let val=Math.floor(Math.random()*6)+1;
        image.src=`${val}.jpg`;
        },300);
        setTimeout(function(){
        let val=Math.floor(Math.random()*6)+1;
        image.src=`${val}.jpg`;
        },400);
        setTimeout(function(){
        let val=Math.floor(Math.random()*6)+1;
        image.src=`${val}.jpg`;
        },500);
        setTimeout(function(){
            let val=Math.floor(Math.random()*6)+1;
            image.src=`${val}.jpg`;
            image.classList.add("image");
            sum=sum+val;
            },600);
            setTimeout(function(){
                par.innerText="SUM:"+sum;
                },700);

        
    }
    
    
});
