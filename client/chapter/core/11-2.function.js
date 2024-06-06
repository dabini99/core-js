/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */


function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
} //함수 선언문을 만들고 아규먼트를 만들면 변수로 사용되서 결과값이 나옴

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

/* -------------------------------------------------------------------------- */

// 함수 선언 → 일반 함수 (표현)식
// let calculateTotal = function(a,b,c,d,e){

 //함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사하여 유사배열이라는 변수 arguments(객체임)
 // console.log(arguments); //배열의 메서드는 사용 불가 하지만 for문을 사용해서 반복은 가능
//   let total = 0;
//   for(let i = 0; i < arguments.length; i++){
    
//     total += arguments[i]   //total = total + arguments[i]
   // console.log(arguments[i]); //값을 더할려면 저장할 수 있는 공간이 필요함 total이란 변수를 만들어서 더해줌
//   }
 // console.log(total);
 // return a + b + c + d + e;
//   return total
// };
// const result = calculateTotal(1000,5000,2500);

// console.log(result);
/* -------------------------------------------------------------------------- */
let calculateTotal = function(a,b,c,d,e){

  
  let total = 0;
  //!for..of문
  // for (let value of arguments){
  //   total += value;
  // }
  // console.log(arguments);
  
  return total
};
const result = calculateTotal(1000,5000,2500);

console.log(result);
/* -------------------------------------------------------------------------- */
// ?배열의 메서드
//순환만 할 때 사용은 forEach를 사용
//알아서 아이템의 갯수를 계산하고 순환을 해줌
Array.forEach(function(item){
  console.log(item);
}) //array의 각각 아이템이 인수로 들어온 함수의 인수(item)로 들어간다 / 그럼 forEach가 받는 함수는 인수를 한개만 받는 형태가 고정인건가요?
//callback함수는 Element(itmes), index, array(잘 안씀)를 받는다//자리가 정해저 있기 때문에 그냥 비우면 안되구 _,i 이런식으로 자리를 비워둬야한다
// [].forEach(function(a,b,c){})
let calculateTotal = function(a,b,c,d,e){

  
  let total = 0;

//argument(유사배열) => 배열로 만들어주면 사용이 가능
  const arr = [...arguments]//전개구문
  arr.forEach(function(item){
    console.log(item);
    total += item;
  }) //애는 됨

  // arguments.forEach(function(item){
  //   console.log(item);
  // })
  //유사배열이기에 이 함수 자체를 실행 할 수 없다 그래서 전개구문으로 argument를 배열로 만들어주기
  
  return total
};
const result = calculateTotal(1000,5000,2500);

console.log(result);  

/* -------------------------------------------------------------------------- */

  // const arr = Array.from(arguments) //배열로 만들어준다

  // const arr = Array.prototype.slice.call(arguments); //어레이도 배열로 만들어준다
//우리는 slice 능력쓰고 싶은데 이건 배열꺼니까 아규먼트가 빌려써야해 아규먼트에 인자를 하나만 쓰면 디스가 된다

/* -------------------------------------------------------------------------- */
//reduce -> 코드를 줄여쓸 수 있음
// [1000,3000,2500].reduce(function(acc,cur){
//   return acc + cur
// },0)
//배열의 메서드 콜백함수를 받고 있음
//배열안에 있는 아이템(1000,3000,2500)들이 acc(값을 누적하는 곳이 따로 있음/차곡차곡 쌓아둠)로 들어감, 토탈이란 것을 사용할 필요가 없음(변수를 하나더 만들 필요가 없음)
//뒤에 있는 0은 초기값(이니셜벨류) 초기값을 설정하게 되면 acc로 가고 아이템값이 cur로 가는 것/ 0을 뭘로 설정하냐에 따라서 계산이 되는 것
//acc+cor= 0+1000이 됨 이 1000원을 acc(누적하는 곳)가 가져감 그러고 acc로 들어감 그러면 acc는 1000원이 되고 cur엔 3000원이 들어감 그럼 4000원 얘는 acc로 보관되고 계속 반복해서 6500이라는 결과가 나오는 것
//이게 왜 필요하냐,, 객체도 만들고 배열도 만들고 문자도 만들고 다 만들 수 있도록 하는데 초기값을 뭘로 하냐에 따라서 다르게 나온다
//reduce는 값을 반환해줘야지 꺼내 사용할 수 있음 그래서 return을 꼭 사용해야함
//초기값(0)이 없으면 맨처음(1000)이 acc로 들어가서 3000부터 나온다(cur을 console.log해서 부르면)

arr.reduce(function(acc,cur){
  return acc + cur
},0)

//에로우 함수
const result = arr.reduce((acc,cur) => acc + cur,0)

// forEach
// arr.forEach(function(price){
//   total += price;
// })
/* -------------------------------------------------------------------------- */
// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function(){};


// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello(){

};


// 콜백 함수 (표현)식
let cb = function(isActive,success,fail){

  if(isActive){
    success()
  }else{
    fail()
  }
  

  // success() //함수-호출가능

  // fail()
};

cb(false,
  function(){console.log('성공입니다');},
  function(){console.log('실패입니다');}
)



  function movePage(url,success,fail){

    if(url === 'https://www.naver.com'){
      success()
    }else{
      fail()
    }

  }
  movePage(
    'https://www.naver.com',
    function(){
      console.log('정확한 url을 입력하셨네요. 3초뒤 해당 사이트로 이동합니다');

      // location.href = 'https://www.navercom'
    },
    function(){
      console.log('잘못된 url을 입력하셨어요, 다시 입력해주세요');
    }
  )

  /* -------------------------------------------------------------------------- */
  function movePage(url,success,fail){

    if(url.includes('https')){
      success(url)
    }else{
      fail()
    }
  }
  
  
  movePage(
    'https://www.daum.net',
    function(url){
   
      console.log(`현재 입력하신 url은 ${url}입니다. 3초 뒤 해당 사이트로 이동합니다.`);
      location.href = url
    },
    function(){
      console.log('잘못된 url을 입력하셨습니다.');
    }
  )









/* -------------------------------------------------------------------------- */
//수업
/* -------------------------------------------------------------------------- */
[1000,5000,2500].forEach(function(){})

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function (){

  // 함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사하여 유사배열 이라 불리는 변수
  let total = 0;
  
  // for 문
  // for(let i = 0; i < arguments.length; i++){
  //   total += arguments[i];
  // }


  // for..for 문
  // for(let value of arguments){
  //   total += value;
  // }

  // console.log(arguments);


  // arguments => array

  const arr = [...arguments]
  // const arr = Array.from(arguments)
  // const arr = Array.prototype.slice.call(arguments);
           
  // console.log( arr );


  // forEach
  // arr.forEach(function(price){
  //   total += price;
  // })

  // arr.forEach(price => total += price)


  // reduce
  // const result = arr.reduce(function(acc,cur){
  //   return acc + cur
  // },0)
  
  // const result = arr.reduce((acc,cur) => acc + cur,0)

  //!빌려쓰기
  // Array.prototype.forEach.call(arguments,function(item){
  //   total += item
  // }) //얘는 일회성 위에꺼는 언제든지 마음껏 사용이 가능

  //!태생을 배열로 바꾸기
  arguments.__proto__ = Array.prototype
  console.log(arguments); //조상 바꿔치기-> 얘도 배열을 만든 거임 //argument는 calculateTotal의 지역변수임
  //조상을 찾는게 __proto__
  //태생을 배열로 바꾸고나면 arguments한테 reduce를 바로 사용할 수 있음
  return total

};


const result = calculateTotal(1000,5000,2500,4000,2300);

console.log( result );


//forEach => 배열을 순환, 값을 반환하지 않음, 그냥 반복을 돌릴 뿐, 어떠한 값을 반환하지 않음
//reduce => 값을 반환함, 배열을 순환해서 반환하는데 들어오는 형태가 숫/문자/배열/객체일 수도 있음 모든 걸 다 반환함
//배열의 메서드인 map => 배열을 순환하고 값을 반환함 only배열만 반환함 무조건 배열만 반환함 //filter도 배열만 반환함

const arr =[10,100,1000]

const mapValue = arr.map(function(item,index){
  return item * 2
})//forEach와 똑같이 쓰임/얘는 꼭 리턴으로 값을 내보내야함 그래서 값을 담아줘야함 const mapValue =로

console.log(mapValue); //결과를 배열에 담아우고 반복이 돌게 없을 때 담아둔걸 퉤 하고 뱉어 냄
/* -------------------------------------------------------------------------- */

// 함수 선언문 vs. 함수 (표현)식


// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression 즉시 함수를 실행하는 표현식
let IIFE;
//encapsulation(캡슐화) 캡슐화 시켜서 보호 시키는거야
//함수가 선언됨과 동시에 실행되는 것을 말한다
//var는 블록스코프가 없지만 함수 스코프가 있다 이걸 캡슐화시키기 위해서 
//
// (function (){

  
//   console.log('안녕~!!')

// })()//함수의 실행구문()

const MASTER = (function (){

  let uuid = 'azxcqwASFqjKJ112314!23'
  
  return {
    getKey(){
      return uuid
    },
    setKey(value){
      uuid = value
    }
  }//반환된 값이 객체를 반환하고 있음 /마스터 안에서만 셋키를 바꿀 수 있도록 코드를 강제한 것임

})()

//즉시 실행할건데 왜 함수로 만듬??