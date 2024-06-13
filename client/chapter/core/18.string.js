/* -------------------- */
/* String Type          */
/* -------------------- */

let message = 'Less is more.';


// length 프로퍼티
let stringTotalLength = message.length;


// 특정 인덱스의 글자 추출
let extractCharacter = message[5];


// 문자열 중간 글자를 바꾸는 건 불가능 
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
//바꿀려면?
let immutableChangeCharacter = 'P' + message.slice(1);

// immutable 불변의, 변할 수 없는
// mutable 변경가능한
// mutant 돌연변이
// enumerable 열거가능한
// iterable 반복가능한

// 부분 문자열 추출
let slice = message.slice(4,-1);  //4번째 부터 잘라내는 것
let subString = message.substring(2,5);
// let subStr = message.substr(); //잘 안쓴다


// 문자열 포함 여부 확인
let indexOf = message.indexOf('hi');   //없으면 음수를 반환 있으면 양수를 반환



function checkBrowser(){

  const agent = window.navigator.userAgent.toLowerCase();
  let browserName;

  switch(true){
    case agent.indexOf('edg') > -1 :
      browserName = 'MS Edge'
    break;
    case agent.indexOf('chrome') > -1 && !!window.chrome :
      browserName = 'Chrome'
    break;
    case agent.indexOf('safari') > -1 :
      browserName = 'Safari'
    break;
    case agent.indexOf('firefox') > -1 :
      browserName = 'Firefox'
    break;
    case agent.indexOf('trident') > -1 :
      browserName = 'IE'
    break;
    default:
      browserName = '무슨 브라우저 쓰세요..?'
  }

  return browserName

}

checkBrowser() // chrome


let lastIndexOf = message.lastIndexOf('s'); //6 순서는 앞에서부터 찾고 반환해준다 (뒤에서부터 찾지만 반환은 앞에서 한다)
let includes = message.includes('Less');
let startsWith = message.startsWith('less'); //해당 단어로 문자가 시작하니? //false 왜냐면 소문자이기 때문에
let endsWith = message.endsWith('more.'); //more.로 끝나?

let str = '     a    b    c                 d         '

// 공백 잘라내기
let trimStart = str.trimStart();
console.log('trimStart : ',trimStart)


let trimEnd = str.trimEnd();
console.log('trimEnd : ',trimEnd)

let trim = str.trim();
console.log('trim : ',trim)

const replaceAll = str.replaceAll(' ',''); //좌변의 값을 찾아서 우변의 쪽으로 바꿔줘 ,,모든 곳을 다 찾아서
const replac = str.replace(/\s*/g,'')  //정규식


// const trimText = string => string.replaceAll(' ','');


function trimText(string){

  return string.replaceAll(' ','');
}


trimText(str) //abcd



// 텍스트 반복
let repeat = message.repeat(3);


// 대소문자 변환
let toLowerCase = message.toLowerCase();
let toUpperCase = message.toUpperCase();


// 텍스트 이름 변환 유틸리티 함수
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) => $1.trim().replace(/(-|_)+/, '').toUpperCase())
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}