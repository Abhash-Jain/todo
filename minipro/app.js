// let div=document.querySelector("div");
// let ul=document.querySelector("ul");
// let lis=document.querySelectorAll("li");


// div.addEventListener("click",function()
// {
//     console.log("div was clicked");
// })

// ul.addEventListener("click",function(event)
// {
//     event.stopPropagation();
//     console.log("ul was clicked");
// })
// for(li of lis)
// {
//     li.addEventListener("click",function(event)
// {
//     event.stopPropagation();
//     console.log("li was clicked");
// })
// }

let btn=document.querySelector("button");
 let ul=document.querySelector("ul");
let inp=document.querySelector("input");


btn.addEventListener("click",function(event)
{
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    
    ul.appendChild(item);
    item.appendChild(delBtn);
    inp.value = "";
    //console.log(inp.value);  
});

let delBtns = document.querySelectorAll(".delete");
for (delBtn of delBtns)
{
    delBtn.addEventListener("click",function()
{
   let par = this.parentElement;
   console.log(par);
   par.remove();
})
}
ul.addEventListener("click", function (event){
    if(event.target.nodeName =="BUTTON")
    {
        let listItem= event.target.parentElement;
        ;listItem.remove();
        console.log("delete");
    }

});