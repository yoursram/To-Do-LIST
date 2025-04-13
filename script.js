const InputBox= document.getElementById("input");
const ListContainer= document.getElementById("list-container");

function Addtask(){
    if(InputBox.value === ''){
        alert("must add anything !!")
    }

    else{
        let li=document.createElement("li");
        li.innerHTML = InputBox.value;
        ListContainer.appendChild(li);
        let img = document.createElement("img");
        img.src="/close.png";
        li.appendChild(img);
    }
    InputBox.value="";
    savedata();
}

ListContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
    }

},false);
function savedata(){
    localStorage.setItem("data",ListContainer.innerHTML);
}

function showdata(){
    ListContainer.innerHTML = localStorage.getItem("data")
}
showdata();
