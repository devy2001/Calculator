let string="";
const click = new Audio("click.wav");
let buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((buttons)=>{
    buttons.addEventListener('click',(e)=>{
        click.play();
        if(e.target.innerHTML=='='){
            string=eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML=='AC'){
            string = "";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML=='ln'){
            console.log(e.target);
            document.querySelector('input').value = "ln("+string+")";
            string = Math.log(eval(string));
        }
        else if(e.target.innerHTML=='log'){
            console.log(e.target);
            document.querySelector('input').value = "log("+string+")";
            var value = Math.log("10");
            string = Math.log(eval(string));
            string =string+"/"+value;
        }
        else if(e.target.innerHTML=='e'){
            console.log(e.target);
            document.querySelector('input').value = string+"e";
            string = string+Math.E;
            
        }
        else if(e.target.innerHTML=='EXP'){
            console.log(e.target);
            document.querySelector('input').value = "e^"+string;
            string = Math.exp(eval(string));
            
        }
        else if(e.target.innerHTML=="sqrt"){
            console.log(e.target);
            document.querySelector('input').value="sqrt("+string+")";
            string = Math.sqrt(eval(string));
        }
        else if(e.target.innerHTML=="abs"){
            console.log(e.target);
            document.querySelector('input').value="abs("+string+")";
            string = Math.abs(eval(string));
        }
        else if(e.target.innerHTML=="sin"){
            console.log(e.target);
            document.querySelector('input').value="sin("+string+")";
            string = Math.sin(eval(string));
        }
        else if(e.target.innerHTML=="cos"){
            console.log(e.target);
            document.querySelector('input').value="cos("+string+")";
            string = Math.cos(eval(string));
        }
        else if(e.target.innerHTML=="tan"){
            console.log(e.target);
            document.querySelector('input').value="tan("+string+")";
            string = Math.tan(eval(string));
        }
        else if(e.target.innerHTML=="Pi"){
            console.log(e.target);
            document.querySelector('input').value=string+"pi";
            string = string + Math.PI;
        }
        else{
            console.log(e.target)
            string = string+e.target.innerHTML;
            document.querySelector('input').value=string;
        }
    })
})