

function formation (n)
{

let container = document.createElement("div")
container.setAttribute("class", "container");

document.body.appendChild(container)
 console.log("hi")

for(let  i = 1; i <= n**2 ; i++){
    let element = document.createElement("div")
    element.setAttribute ("class" ,"screen")
    container.appendChild(element);
    console.log("jo")
    
}
}

formation(15);
paint();

function paint (){
    let screen = document.getElementsByClassName("screen");

    for( let i = 0; i < screen.length;i++)
    {
    screen[i].addEventListener('mouseover', color )
    }

    function color () 
    {
        this.style.backgroundColor = "green";
        console.log("working")

    }
}
function reset () {
    let number = prompt("enter the number of squares ")
    if(number > 100 )
    {
        alert("enter a value less than 100")
    }
    else if(number < 1){
        //pass;
    }
    else
    {
        let container = document.querySelector(".container");
        container.remove();
        console.log(number)
        formation(number);
        let divide = 600/number;

        let screen = document.querySelectorAll(".screen");

    for (let i = 0; i < screen.length; i++) {
    screen[i].style.width = divide + 'px';
    screen[i].style.height = divide + 'px';
    }
    paint()
    }
}