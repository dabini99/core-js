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






let lastIndexOf = message.lastIndexOf();
let includes;
let startsWith;
let endsWith;


// 공백 잘라내기
let trimLeft;
let trimRight;
let trim;


// 텍스트 반복
let repeat;


// 대소문자 변환
let toLowerCase;
let toUpperCase;


// 텍스트 이름 변환 유틸리티 함수
let toCamelCase;
let toPascalCase;