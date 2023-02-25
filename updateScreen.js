


//evaluate to answer
//wrong logic /// 1*2/2+4-5
///I think this function // 1*2 + 2/2 + 2+4 + 4-5 //but that too is not what this function is doing
let numbers = [1,2,2,4,5,232,54,12,41,55,22];
let ops2 = ['-','/','*','-','+','/','/','*','-','*'];
let len = ops2.length;


// function getAnswer(numbers,ops2){
//     let answer = 0;
//     let len = numbers.length;
//     for(let i = 0;i<len;i++){
//         ops2.forEach((val,index) => {
//             if(val == '/'){
//                 if(numbers[index+1] == 0) return '.....math error .....';
//                 numbers[index] /=numbers[index+1]; 
//                 numbers.splice(index+1,1);
//                 const lookOp = ops2.splice(index,1);//=
//                 console.log(`now doing ${lookOp} operation at ${index} and left with ${numbers }`);
//                 numbers;
//                 ops2;
//             }
//             else if(val == '*'){
//                 (numbers[index]*=numbers[index+1]);
//                 numbers.splice(index+1,1);
//                 const lookOp = ops2.splice(index,1);
//                 console.log(`now doing ${lookOp} operation at ${index} and left with ${numbers }`);
//                 numbers;
//                 ops2;//=
//             }
//             else if(val == '+' && !ops2.includes('/') && !ops2.includes('*')){
//                 numbers[index]+=numbers[index+1];
//                 numbers.splice(index+1,1);
//                 const lookOp = ops2.splice(index,1); 
//                 console.log(`now doing ${lookOp} operation at ${index} and left with ${numbers }`);
//                 numbers;
//                 ops2;

//             }else if(val == '-' && !ops2.includes('/') && !ops2.includes('*')){
//                 numbers[index]-=numbers[index+1];
//                 numbers.splice(index+1,1);
//                 const lookOp = ops2.splice(index,1); 
//                 console.log(`now doing ${lookOp} operation at ${index} and left with ${numbers }`);
//                 numbers;
//                 ops2;
//             };

//         })
//         numbers
//         if(numbers.length == 1) answer = numbers[0];
        
//     };
//     return answer;
// }

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
      ops2.splice(i,1);
      numbers.splice(i+1,1);
      console.log(i);
      ops2;numbers;
    }
    if(ops2[i]=='*'){
      console.log(i)
      numbers[i]*=numbers[i+1];
      ops2.splice(i,1);
      numbers.splice(i+1,1);
    }
  }
  for(let i = 0; numbers.length>1;){
    let len = numbers.length;
    if(ops2[i]=='-'){
      numbers[i]-=numbers[i+1];
      ops2.splice(i,1);
      numbers.splice(i+1,1);
    }
    if(ops2[i]=='+'){
      numbers[i]+=numbers[i+1];
      ops2.splice(i,1);
      numbers.splice(i+1,1);
    }
  
  }
console.log(numbers)
return numbers[0];

}


const answer = getAnswer(numbers,ops2);



console.log('.......ANSWER.......');
console.log(answer);
console.log('.......ANSWER.......');
