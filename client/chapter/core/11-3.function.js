/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

//arguments는 함수 안에서 살고 있지만 에로우함수에서는 꺼낼 수 없어요 존재하지 않기 때문이죠
//...args를 하면 배열이 나온다
//...args를 rest parameter라고 부른다 얘의 장점은 유사배열이 아니라서 바로 배열의 매서드를 사용이 가능하다
//arguments보다 더 많이 사용한다 /...args는 모든 함수에서 사용할 수 있다
//내가 필요한거 만 뽑아내고 나머지를 모아둠, (a,...args)는 a에 1000을 넣고 나머지는 ...args에 담는다 /나머지들을 받을 수 있도록 뒤에 나와야한다
//전개구문이랑 비슷 하지만 함수 안에 들어가면 rest parameter고 밖에서 나오면 전개구문
// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (...args) => {

  // console.log(args);

  //!result에 total이 담길 수 있도록 for문 사용
  // for(let i = 0; i < args.length ; i++){
  //   // console.log(args[i]);
  //   //변수를 만들어서 값을 누적시켜야함
  //   total += args[i]
  // }
  

  //!for...of문 사용
  // for(let value of args){
  //   total += value;
  // }
  //!forEach문 사용
  // args.forEach(function(item){
  //   total += item;
  // })
  //!arrow function
  // args.forEach(item => total += item )
  //!reduce문 사용
  // const result = args.reduce(function(acc,cur){
  //   return acc + cur;
  // },0)

  //! arrow function
  // return args.reduce((acc,cur) => acc + cur,0)

  // return result;
};
  const calc = (...args)=> args.reduce((acc,cur)=> acc + cur,0)

const result = calcAllMoney(1000,5000,4500,13000);
console.log(result);
/* -------------------------------------------------------------------------- */
// let calcAllMoney  = (...rest) => {
  
  // let total = 0;

  // for 문 
  // for(let i = 0; i < rest.length; i++){
  //   total += rest[i];
  // }


  // for...of 문
  // for(let value of rest){
  //   total += value;
  // }

  // forEach  => arrow function
  // rest.forEach(function(item){
  //   total += item;
  // })

  // rest.forEach(item => total += item)


  // reduce => arrow function

  // const result = rest.reduce(function(acc,cur){
  //   return acc + cur
  // },0)

  
  // return rest.reduce((acc,cur) => acc + cur,0);

// };

// const result = calcAllMoney(1000,5000,4500,13000);
/* -------------------------------------------------------------------------- */
// 화살표 함수와 this
// 일반함수의 this는 나를 호출한 대상을 this /constructor내장 (concise method는 예외) /일반함수는 객체의 메서드로 사용이 많이됨, this를 찾기 위해서
//화살표함수의 this는 무조건 window가 아니라 상위 컨텍스트의 this를 가져오는 거였군요...

// 화살표 함수의 this는 바인딩을 하지 않음 -> 상위 컨텍스트에서 찾음
//this: 나를 호출한 대상
const user = {
  name: 'lion',
  sayHi: function(){
    console.log(this);
  }
}, //=> user sayHi를 호출한 (나를 호출한)대상이 user임 /일반함수

sayHi:() => {
  console.log(this);
},
//arrow function은 this를 찾지 않는다 =>window가 나옴

sayHi3(){
  console.log(this);
} //concise method, method축약형
//객체의 메서드를 정의하는 방법
//메서드는 객체 안에서의 함수
//3가지 방법이 있지만 주로 concise method를 사용한다 cuz, this를 잘 찾아준다

const user = {
  name: 'lion',
  total: 0,
  grades: [30,60,80],
  totalGrades(){
    this.grades.forEach((item)=>{
      this.total += item
    })
    return this.total
  }
}
//function일땐 안나오다가 arrow function일때 왜 값이 나와,,? 
//- 메서드 안의 함수를 작성해야 할 때 // 내 상위 this를 가져오기 때문에
//!두번째 예제
//그러면 메서드(함수)가 얼만큼 깊게 들어가든 ~~.<메서드> 로 호출하는 형태가 아니면 호출한 대상은 window가 되는건가요?? 예에
//totalGrades <- user의 메서드임. user가 호출
// sayHi <- user의 메서드가 아님. totalGrades함수가 window한테 불러달라고 한거
// 이렇게 말해도 될까요
/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
// let pow = (numeric,powerCount)=>{

//   let result = 1;

//   for(let i = 0; i < powerCount; i++){
//     result *= numeric
//   }
//   return result;
// }; 
/* -------------------------------------------------------------------------- */
//표현식
const pow = (numeric,powerCount) => {
  
  return Array(powerCount).fill(null).reduce((acc)=>{
    return acc *= numeric
  },1)

}
// fill을 사용해 요소를 채워줘야 하는게 그냥 array(20)을 하면 배열을 생성하긴 하는데 비어있는거고 
// 즉 요소가 정의되지 않아서 reduce 메소드를 바로 사용할 수 없어서가 맞나요 ?? yesssss
const pow = (numeric,powerCount) => Array(powerCount).fill(null).reduce(acc => acc *= numeric,1)
/* -------------------------------------------------------------------------- */
// repeat(text: string, repeatCount: number): string;
// let repeat = (text,repeatCount)=>{

//   let result = '';

//   for(let i = 0; i < repeatCount; i++){
//     result += text;
//   }
//   return result
// }; 



// const repeat = (text,repeatCount)=>{
//   return Array(repeatCount).fill(null).reduce((acc)=>{
//     return acc + text
//   },'')
// }

const repeat = (text,repeatCount)=> Array(repeatCount).fill(null).reduce((acc)=> acc + text,'')


// repeat('사랑해👋',3)  