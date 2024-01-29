const button=document.querySelector(".createnote button");
const inputfield = document.querySelector(".inputfiled");
console.log(button);
console.log(inputfield);
button.addEventListener("click",()=>{
    const list_item =document.createElement("li");
    const textarea =document.createElement("textarea");
    textarea.className ="input";
    textarea.setAttribute("cols","30");
    textarea.setAttribute("rows","3");

    // const icon=document.createElement("<i class="fa-regular fa-trash-can"></i>")

    // list_item
    const icon =document.createElement("i");
    icon.setAttribute("class","fa-regular fa-trash-can");
    inputfield.appendChild(list_item);
    list_item.appendChild(textarea);
    list_item.appendChild(icon);
    console.log(inputfield);

});

button =addEventListener("click",function(e){
    if(e.target.tagName === "I"){
                    e.target.parentElement.remove();
                }
    console.log(e.target.tagName);
})



