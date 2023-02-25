
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

//CREATE BUTTONS and event listening
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
//string giving fucntion

function returnNumsAndOps(text,ops){
let numbersOkkeAane =[];//=
let ops2Aane = [];
let j = 0;
let textArr = text.split('');//=
let prev_value = 0;//=
let l = textArr.length;//=
console.log({text,l,ops})
for(let i = 0;i<l;i++){
    
    if(!ops.includes(textArr[i])){
        let value = Number(textArr[i]);//=
        prev_value = prev_value*10 + value; //=
    }else{
        ops2Aane[j] = textArr[i]; //=
        numbersOkkeAane[j] = prev_value;
        prev_value = 0;
        ops2Aane;
        j++;
    }
    if(i == l-1){
        numbersOkkeAane[j] = prev_value;
        prev_value = 0;
    }
};

// console.log({numbersOkkeAane,ops2Aane});
return {numbersOkkeAane,ops2Aane};
}  



//function for evaluating num and ops array into valid math expression

function getAnswer(numbers,ops2){

    // 
    for(let i = 0; ops2.includes('/') || ops2.includes('*');)
    {
      if(ops2[i] == '-' || ops2[i] == '+') i++;
      if(ops2[i]== '/'){
        console.log(i)
        if(numbers[i+1] == 0) 
          return;
        numbers[i]/=numbers[i+1];
        ops2.splice(i,1);numbers.splice(i+1,1);
        console.log(i);
        ops2;numbers;
      }
      if(ops2[i]=='*'){
        console.log(i)
        numbers[i]*=numbers[i+1];
        ops2.splice(i,1);numbers.splice(i+1,1);
      }
    }
    for(let i = 0; numbers.length>1;){
      if(ops2[i]=='-'){
        numbers[i]-=numbers[i+1];
        ops2.splice(i,1);numbers.splice(i+1,1);
      }
      if(ops2[i]=='+'){
        numbers[i]+=numbers[i+1];
        ops2.splice(i,1);numbers.splice(i+1,1);
      }
    
    }
  let answer = numbers[0];
  return answer;
  
  }
  
//update screen on event
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
    if(value == '='){
        const numAndOps = returnNumsAndOps(text,operatorsCopy);
        value = '';
        const answer = `${getAnswer(numAndOps.numbersOkkeAane,numAndOps.ops2Aane)}`;
        // console.log(`.......ANSWER...ASNWER ${answer}`)
        screen.innerText = ''
        screen.innerText+= answer;
        return;
    }
    
    screen.innerText += value;
    text = screen.innerText; 
    let textArr = text.split('');
    
    
    
    
    
    prev_value = textArr[textArr.length - 2];
    console.table({ value,prev_value, op_counter, text});
    
    operatorsCopy.forEach((op,index)=>{
        if(op == value){
            operatorsCopy.forEach((op2,i)=>{
                if(op2 == prev_value) op_counter++;
            })
        }
    })
    


    // //
    while(op_counter>0){
        text = text.slice(0,-2);
        text += value;
        console.log(`new text ${text}`)
        screen.innerText = text;
        op_counter--;
    }

    // prev_value = value;
    // console.table({agin_pv : prev_value, again_text : text})

    //return numbers and operators array from text string
    console.log("........end of updateScreen....................................");

    
}
//DONE.. make buttons for inputs 
// - js and plain html...as comfortable to write


//DONE... use eventlisteners and read values

// pass it to functions and update on screen
// store the result in some variable
// make sure the presidencies of math are followed
