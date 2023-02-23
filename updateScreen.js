


//evaluate to answer
//wrong logic /// 1*2/2+4-5
///I think this function // 1*2 + 2/2 + 2+4 + 4-5 //but that too is not what this function is doing
let numbers = [1,2,2,4,5];
let ops2 = ['*','/','+','-'];
let len = ops2.length;
let answer = 0;
function getAnswer(numbers,ops2){
    for(let i = 0;i<len;i++){
        let skipper = false;
        ops2.forEach((val,index) => {
            if(val == '/'){
                if(numbers[index+1] == 0) return '.....math error .....';
                answer += (numbers[index]/numbers[index+1]); 
                ops2.splice(index,1);//=
                ops2;
                skipper = true;
                answer;
            }
            else if(val == '*'){
                answer +=(numbers[index]*numbers[index+1]);
                ops2.splice(index,1);//=
                skipper = true;
                answer; //
            }
            
        });

        if(skipper == true) 
            continue;

        ops2.forEach((val,index)=>{
            if(val == '+'){
                answer += numbers[index]+numbers[index+1];
                answer;
                ops2.splice(index,1); 
            }else if(val == '-'){
                answer += numbers[index]-numbers[index+1];
                answer;
                ops2.splice(index,1); 
            };

        })
        
    }
}

getAnswer(numbers,ops2);
console.log('.......ANSWER.......');
console.log(answer);
console.log('.......ANSWER.......');
