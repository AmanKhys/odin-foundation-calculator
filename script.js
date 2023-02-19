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

function updateScreen(e){
    const button = e.target;
    const value = button.id;
    console.log(value);
    screen.innerText += `${value}`;


}
// use eventlisteners and read values
// pass it to functions and update on screen
// store the result in some variable
// make sure the presidencies of math are followed
