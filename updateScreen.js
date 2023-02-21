let text = "sfsf23242353ti5232";
let ops = ['s','f','t','i'];
let nums = Array(100).fill(0);//=
let numbers =[];
let ops2 = [];
let j = 0;
let textArr = text.split('');//=
for(let i = 0;i<textArr.length-1;i++){
    if(!ops.includes(textArr[i])){
        let prev_value = Number(nums[j]);//=
        let value = Number(textArr[i]);//=
        prev_value = prev_value*10 + value; //=
        numbers[j] = prev_value;//=

    }else{
        ops2[j] = textArr[i]; 
        j++;
    }
};

console.log({nums,ops2}); 