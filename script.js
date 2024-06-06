



let container = document.createElement("div")
container.setAttribute("class", "container");

document.body.appendChild(container)
 

for(let  i = 1; i <= 275 ; i++){
    var element = document.createElement("div")
    element.setAttribute ("class" ,"screen"+i)
    container.appendChild(element);
    
}

