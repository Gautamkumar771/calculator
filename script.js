// var button = document.getElementsByClassName("button");
// var display = document.getElementById("display");
// var operand1 = 0;
// var operand2 = null;
// var operator = null;

// for(var i = 0; i<buttons.length;i++){
//     buttons[i].addEventListener('click' , function(){

//         var value = this.getAttribute('data-value');
//         if(value == '+'){// if an operator is clicked
//             operator = '+';
//             operand1 = parseFloat(display.textContent);

//         }else if(value == '='){

//             operand2 = parseFloat(display.textContent);
//             //use eval to get result;
//             //show result on display

//         }else{
//             display.innerText += value;
//         }
//     });
// }


let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click' , (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string ="";
            document.querySelector('input').value = string;
        }
        else{
        
        console.log(e.target);
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }
    })
})