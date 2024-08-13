let string = "";
let buttons = document.querySelectorAll('.button');
let input = document.getElementById('input');

Array.from(buttons).forEach(button =>{
    button.addEventListener('click', (e)=>{
     if(e.target.innerHTML === '='){
        string = eval(string);
        input.value = string;
     }
     else if(e.target.innerHTML === "AC"){
         input.value = '';
         string = input.value
     }
     else{
     string = string + e.target.innerHTML;
     input.value = string;
    }
    })
})