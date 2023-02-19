function add (a,b){ return a+b;};
function subtract(a,b){return a-b};
function multiply(a,b){return a*b};
function divide(a,b){
    if(b=0) return;
    return a/b;
}

const container = document.createElement('div');
container.classList.add("container-style");
const screen = document.createElement('div');
screen.classList.add("screen-style");
const inputBody = document.createElement('div');
inputBody.classList.add("inputBody-style");

document.body.appendChild(container);
container.appendChild(screen);
container.appendChild(inputBody);
const operators = ['+','-','*','/','=','clear'];
 for(let i=0; i<4; i++){
    const buttonRow = document.createElement('div');
    buttonRow.classList.add('button-row-style');
    for(let j=0;j<4;j++){
        const button = document.createElement('button');
        button.classList.add('button-style');
        if((i<3 && j<3) || (i==2 && j==2)){
            const id = i*3 + j+1;
            button.setAttribute('id',`${id}`);
            button.innerText = `${id}`;
        }
        else if(i==2 && j==3){
            const id = 0;
            button.setAttribute('id',`${id}`);
            button.innerText = `${id}`;   
        }else{
            const operator = operators.shift();
            button.setAttribute('id',`${operator}`);
            button.innerText = `${operator}`;
        }

        buttonRow.appendChild(button);
        button.addEventListener('click',(e)=>updateScreen(e));
    }
    inputBody.appendChild(buttonRow);
 }
//DONE.. make buttons for inputs 
// - js and plain html...as comfortable to write
let prev_value = "";
let op_counter = 0;
function updateScreen(e){
    const button = e.target;
    let value = button.id;
    if(value == "clear") screen.innerText = "";
    let text = screen.innerText; //one character less than actual innerText since it is updated later
    const valueLength = value.length;
    const textLength = text.length;
    prev_value = text.slice(textLength-3,2);
    console.log(`prev value is ${prev_value}`)
    console.log(`text is ${text}`)
    console.log(` value is ${value}`);
    console.log(`opC is ${op_counter}`)
    if(value != "clear") 
        screen.innerText += `${value}`;
    if(op_counter>0){
        const newText = text.slice(0,(textLength - valueLength - 1));
        console.log(`new text ${newText}`)
        screen.innerText = newText;
        op_counter--;
    }
    for(op in operators){
        if(prev_value == op && prev_value == value){
            op_counter++;
        }
    }
    prev_value = value;
    console.log(`prev value is ${prev_value}`)

}
// use eventlisteners and read values
// pass it to functions and update on screen
// store the result in some variable
// make sure the presidencies of math are followed
