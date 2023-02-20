function add (a,b){ return a+b;};
function subtract(a,b){return a-b};
function multiply(a,b){return a*b};
function divide(a,b){
    if(b=0) return;
    return a/b;
}
//construct the body//
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
const operatorsCopy = [...operators];

//CREATE BUTTONS FOR INPUT  
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

let text = ""
let prev_value = "";
let op_counter = 0;
let nums = []
function updateScreen(e){
    const button = e.target;
    let value = button.id;
    if(value == "clear"){
        screen.innerText = '';
        return;
    }

    
    screen.innerText += value;
    text = screen.innerText; //one character less than actual innerText since it is updated later
    let textArr = text.split('');
    
    
    
    
    
    prev_value = textArr[textArr.length - 2];
    console.table({ value,prev_value, op_counter, text});
    
    operatorsCopy.forEach((op,index)=>{
        if(op == value && value == prev_value) op_counter++;
    })


    // //
    if(op_counter>0){
        text = text.slice(0,-1);
        console.log(`new text ${text}`)
        screen.innerText = text;
        op_counter--;
    }

    // prev_value = value;
    // console.table({agin_pv : prev_value, again_text : text})

}
//DONE.. make buttons for inputs 
// - js and plain html...as comfortable to write


//DONE... use eventlisteners and read values

// pass it to functions and update on screen
// store the result in some variable
// make sure the presidencies of math are followed
