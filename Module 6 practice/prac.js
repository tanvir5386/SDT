// ............Answer No 1............

// 0-40 =c
// 41-60  = B
// 61-69 = A-
// 70-79 = A
// 80-100 = A+


// var result = 41;

// if(result<0){
//     console.log("Fail");
// }
// else if(result >=0 && result <=40){
//     console.log("got c grade");
// }
// else if(result >40 && result<=60){
//     console.log("Tumi b grade paiso");
// }
// else if(result >60 && result <=69){
//     console.log("tumi A- Paiso");
// }
// else if(result >70 && result <=79){
//     console.log("tumi A- Paiso");
// }
// else if(result >80 && result <=100){
//     console.log("tumi A- Paiso");
// }
// else{
//     console.log("Invalid");
// }





// ............Answer No 2............

// const number = 12;

// const checkevenOdd = (num)=>{
//     if(num %2 == 0){
//         console.log("Even");
//     }
//     else{
//         console.log("Odd");
//     }
// };
// checkevenOdd(number)



// ............Answer No 3............

// const insertion =(array)=>{
//     for(let i=0; i<array.length-1; i++){
//         for(let j=i+1; j<array.length; j++){
//             if(array[i]>array[j]){
//                 temp= array[i];
//                 array[i] = array[j];
//                 array[j]= temp;
//             }
//         }
//     }
//     return array;
// }

// const usortArray = [12, 11, 13, 5, 6];
// const sortArray = insertion(usortArray);

// console.log(sortArray);

// using sort function 

// const usortArray = [12, 11, 13, 5, 6];
// // usortArray.sort((a,b) => a-b); 

// usortArray.sort((a,b) => b-a); 

// console.log(usortArray);






// ............Answer No 4...........
// const checkleapyear = (year) =>{ 
//     return year%4 == 0 && year % 100 !=0 || year%400 ==0
// };


// const year = 2023;
// if(checkleapyear(year)){
//     console.log('leap year');
// }
// else{
//     console.log('Not Leap year');
// }







// ............Answer No 5...........

// const divisible = ()=>{
//     let arr =[];
//     for(let i =1; i<=50; i++){
//         if(i%3==0 && i%5==0){
//             arr.push(i);
//         }
//     }
//     return arr;
// } 

// const divisible = ()=>{
//     let arr =[];
//     for(let i =1; i<=50; i++){
//         if(i%3==0 || i%5==0){
//             arr.push(i);
//         }
//     }
//     return arr;
// } 

// const div = divisible();
// console.log(div);









// ............Answer No 6...........

// const friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

// const checkBiggest =(array)=>{
//     let biggest = array[0];

//     const  result = array.filter(pd =>{
//         if(pd.length > biggest.length){
//             biggest = pd;
//         }
//     })
//     return biggest;
// }
// const output = checkBiggest(friends);
// console.log(output);







// ............Answer No 7...........

// const numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

// const checkDuplicate= (array) => {
//     let newArray = [];
//     let s=false;
//     let cnt =0;
    
//     for(let i =0; i<array.length; i++){
//         for(let j=0; j<newArray.length; j++){
//             if(array[i] == newArray[j]){
//                 s= true;
//             }
//         }
//         cnt =1;
//     if(cnt == 1 && s== false){
//         newArray.push(array[i]);
//     }
//     cnt =0;
//     s= false;
//     }
//     return newArray;
    
// }

// const result = checkDuplicate(numbers);
// console.log(result);











// ............Answer No 8...........

// const numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

// const out = Math.max(...numbers);
// console.log(out);








// ............Answer No 9...........

const array = [];
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const getUserInput = () => {
  rl.question("Enter a value: ", (userInput) => {
    if (userInput) {
      array.push(Number(userInput));
       if (array.length < 3) {
        getUserInput();
        }
        else{
            getLivingCost();
        }
    } else {
      rl.close();
    }
  });
};
getUserInput();

const getLivingCost = () => {
  rl.question("Enter living cost: ", (userInput) => {
    let living_cost=Number(userInput);
    rl.close();
    CheckSaving(array,living_cost);
  });
};


//by commentout previous code it could check for also Invlid or not
// const array = [1000,2000,3000];
// const living_cost = 5400;

const CheckSaving=(array,living_cost)=>{
    if(!Array.isArray(array)){
        console.log("Invalid input");
        return;
    }
    if(typeof living_cost !== "number"){
        console.log('Invalid input');
    }
    let sum =0;
    const out2 = array.forEach(pay =>{
        if(pay >=3000){   
         bonus = pay*0.2;
         pay = pay-bonus;
         sum = sum + pay;
         }
         else{
            sum= sum+pay;
         }
    })
    // console.log(sum);
    let saving = sum-living_cost;
    if(saving <0){
        console.log('earn more');
    }
    else if(saving >=0){
        console.log(saving);
    }
}

// CheckSaving(living_cost,array);



