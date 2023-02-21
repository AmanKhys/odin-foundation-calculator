let text = "22s345353f239482984i545888t999";
let ops = ['s','f','t','i'];
let numbers =Array(20).fill(0);//=
let ops2 = [];
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
        ops2[j] = textArr[i]; //=
        numbers[j] = prev_value;
        prev_value = 0;
        ops2;
        j++;
    }
    if(i == l-1){
        numbers[j] = prev_value;
        prev_value = 0;
    }
};

console.log({numbers,ops2}); 