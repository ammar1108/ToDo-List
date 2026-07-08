const content = document.querySelector(".content")
const form = document.querySelector("#form")
const add= document.querySelector("#add");
const input = document.querySelector("#input")
const clear = document.querySelector(".clear");


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let item = document.createElement("div");


item.innerHTML=`<input type="checkbox">
            <p>${input.value}</p>
            <button class="delete">Delete</button>`

item.classList.add("item");
    content.append(item);
     input.value="";
})


clear.addEventListener("click", ()=>{
    content.innerHTML="";

   
})


content.addEventListener("click",(e)=>{
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove();
    }
}
)

content.addEventListener("click",(e)=>{
    if(e.target.matches("input[type='checkbox']")){
        const para = e.target.parentElement.querySelector("p");
    

    if(e.target.checked){
        para.style.textDecoration="line-through";
        para.style.color="#888";
    }else{para.style.textDecoration="none";
        para.style.color="";
    }
};
})


