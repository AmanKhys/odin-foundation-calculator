


//evaluate to answer
//wrong logic /// 1*2/2+4-5
///I think this function // 1*2 + 2/2 + 2+4 + 4-5 //but that too is not what this function is doing
let numbers = [1,2,2,4,5];
let ops2 = ['/','*','-','-'];
let len = ops2.length;
function getAnswer(numbers,ops2){
    let answer = 0;
    for(let i = 0;i<len;i++){
        let skipper = false;
        ops2.forEach((val,index) => {
            if(val == '/'){
                if(numbers[index+1] == 0) return '.....math error .....';
                numbers[index] /=numbers[index+1]; 
                numbers.splice(index+1,1);
                ops2.splice(index,1);//=
                numbers;
                ops2;
                skipper = true;
            }
            else if(val == '*'){
                (numbers[index]*=numbers[index+1]);
                numbers.splice(index+1,1);
                ops2.splice(index,1);
                numbers;
                ops2;//=
                skipper = true; //
            }
            
        });

        if(skipper == true) 
            continue;

        ops2.forEach((val,index)=>{
            if(val == '+'){
                numbers[index]+=numbers[index+1];
                numbers.splice(index+1,1);
                ops2.splice(index,1); 
                numbers;
                ops2;

            }else if(val == '-'){
                numbers[index]-=numbers[index+1];
                numbers.splice(index+1,1);
                ops2.splice(index,1); 
                numbers;
                ops2;
            };

        })
        numbers
        if(numbers.length == 1) answer = numbers[0];
        
    };
    return answer;

}

getAnswer(numbers,ops2);
console.log('.......ANSWER.......');
console.log(getAnswer(numbers,ops2));
console.log('.......ANSWER.......');
