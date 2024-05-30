/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값

let empty = null;
console.log(typeof empty);
// 언어상의 오류다 OBJECT

// 2. 값이 할당되지 않은 상태

let undef;
console.log(typeof undef);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)

const double = "hello"; //string literal
const single = 'hello';
const backtick = `hello ${double + single}`;

console.log(backtick);

/* -------------------------------------------------------------------------- */
// String 생성자 함수를 사용하여 문자열 객체를 만든다
const str = new String('Hello'); //생성자 함수 앞에는 무조건 new를 붙이게 되어있다 =>str{}생성


// 4. 정수, 부동 소수점 숫자(길이 제약)
const integer = 150; //number literal 방식
const floatingPointNumber = 10.5;

console.log(typeof NaN);

const num = new Number(150);
console.log(num);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)

const bigInt = 123n;
console.log(typeof bigInt);
const b = BigInt(111); //new안붙이고 만든다

// 6. 참(true, yes) 또는 거짓(false, no)

const isActive = true;
console.log(typeof isActive);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)

const obj = {
  name: 'tiger'
}  //object literal
console.log(obj);

const object = new Object({name: 'davin'});

// 8. 고유한 식별자(unique identifier)

const id = Symbol('uuid');
const id2= Symbol('uuid'); //id와 id2는 다르다

console.log(typeof id);
console.log(typeof id2);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류



console.clear()
// Object

const user = {
  name: 'tiger',
  age: 20,
}
// 콘솔에서 입력하면 값이 나온다아 user.name/age


// Array

// 배열은 순서를 기억하고 있기 때문에 배열의 몇번째를 값을 꺼낼 수가 있다

const newArray = new Array(1,2,3);

const arr = [10,100,1000];  //권장

//함수를 안에 넣을 수도 있다 배열안에 배열도 쌉가능

// function
function 더하기(a,b){
  // console.log(a + b);
  return a + b
}
더하기(1,2)


function 붕어빵틀(재료){
  return `따끈 따끈 맛있는 ${재료} 맛 붕어빵`
};
const 팥붕어빵 = 붕어빵틀('팥')

console.log(팥붕어빵);

// this


