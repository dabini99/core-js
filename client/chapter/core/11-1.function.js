/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */

// console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
// console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
// console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
// console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
// console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);

function getRandomValue(){
  return Math.random() > 0.5 ? 1 : 0;
}

// 함수 선언
function calcPrice(priceA,priceB,priceC=getRandomValue(),priceD=0){  //매개변수 priceA,priceB //=0은 default parameter임

  // if(priceC === undefined) priceC = 0;  //확인하는 작업
  // if(!priceC) priceC = 0; //undefined가 priceC로 들어가면서 형변환 false
  // priceC = priceC || 0;
  // priceC ||= 0;
  // priceC ??= 0; //0을 c자리에 넣었을 때 0으로 처리해줌, 빈문자 들어오면 큰일남 

  // console.log(priceA+priceB+priceC+priceD);

  return priceA + priceB + priceC + priceD;

}
// 함수 호출
const result = calcPrice(1000,3000)  //인수1000,3000 //D는 undefined여서 숫자랑 undefined랑 하는 건 말이 안되서 NaN이 나온다
// 함수 값 반환

// 매개 변수

// 매개 변수 (parameter) vs. 전달 인수 (argument)

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건

// 1. 함수의 이름 잘 짓기(동사인 접두어) / 가독성이 좋다 => 읽었을 때 바로 기능을 알 수 있는 형태로!
// 2. 전역의 오염을 막는다
// 3. 하나의 기능만을 수행해야 한다
// 4. 재사용성이 좋아야한다


/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;
//내가한거
// function rem(pxValue,string,base){

// console.log(pxValue,string,base /16);

// }
//쌤이 해준거
function rem(pxValue,base = 16){

    if(!pxValue){
      throw new Error('rem 함수의 첫 번째 인수는 필수 입력 값 입니다');
    }

    if(typeof pxValue === 'string'){

      pxValue = parseInt(pxValue,10)
    }

    if(typeof base === 'string'){
      base = parseInt(base,10);
    }

  return pxValue / base + 'rem'
  
  }

  //Test Driven Development
  console.assert(rem(20) === '1.25rem') //assert주장하는 /assert(기댓값)
  console.assert(rem('25px') === '1.5625rem')
  console.assert(rem('30px',10) === '3rem')
// rem(20) //1.5625rem을 반환하는 함수 변수안에 인수/16



// css(node: string, prop: string, value: number|strung) : string;
let css;







//점표기법 => 변수로 사용x
//대괄호 표기법 => 변수로 사용o
// setStyle('.first','color','blue')

const first = document.querySelector('.first');

function setStyle(node, prop, value){
  node.style[prop] = value
}

setStyle(first,'color','blue')



/* -------------------------------------------------------------------------- */

const first = document.querySelector('.first');

function setStyle(node, prop, value){

  if(typeof node === 'string') node = document.querySelector(node)

  node.style[prop] = value
}

setStyle('.first','color','blue')


/* -------------------------------------------------------------------------- */

const first = document.querySelector('.first');

function setStyle(node, prop, value){

  if(typeof node === 'string') node = document.querySelector(node)

  if(typeof prop !== 'string') throw new Error('setStyle 함수의 두 번째 인수는 문자 타입이어야 합니다');

  node.style[prop] = value
}

setStyle('.first','color','blue')

/* -------------------------------------------------------------------------- */


const first = document.querySelector('.first');

function setStyle(node, prop, value){

  if(typeof node === 'string') node = document.querySelector(node)

  if(typeof prop !== 'string') throw new Error('setStyle 함수의 두 번째 인수는 문자 타입이어야 합니다');

  if(!value) throw new Error('setStyle 함수의 세 번째 인수는 필수값 입니다.')

  node.style[prop] = value
}

setStyle('.first','color','blue')



// node의 값을 'h1'으로 받았을 경우 

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 sytle 속성이 아닐 경우 

// value의 값이 number가 아닌 경우 



// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.