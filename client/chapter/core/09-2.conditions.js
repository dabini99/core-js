/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자 F&& 
let AandB = a && b;
console.log('AandB : ',AandB)

// a &&= b //논리곱 할당 연산자  a = a && b



// 논리합(또는) 연산자 ||
let AorB = a || b;
console.log('AorB : ',AorB)

// a||=b //논리합 할당 연산자

// 부정 연산자
let reverseValue = !value;
console.log('reverseValue : ',reverseValue)

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFalsy:false};


// =>{thisIsFalsy:false}

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2,3].length || {thisIsTruthy:true};
// =>2 because [2,3]의 글자수 length이기 때문에 2
//변환전 원래 2 값이 나와야 하는게 맞지만 [2,3].length 값인 2가 나오고 형변환을 하면 true이고 변환전 원래 값인 2가 나온다


// let userName = prompt('누구세요?');

// if(userName === 'Admin'){
//   let password = prompt('비밀번호는?');

//   if(password === 'TheMaster'){
//     alert('환영합니다!');
//   }else{
//     alert('인증에 실패하였습니다')
//   }
// }
// else{
//   alert('취소되습니다');
// }


/* -------------------------------------------------------------------------- */
let userName = prompt('누구세요?');

if(userName?.toLowerCase() === 'admin'){
  
  let password = prompt('비밀번호는?');

  if(password?.toLowerCase() === 'themaster'){
    console.log('환영합니다~~!! 짝짝');

  }else if(password === null){
    console.log('취소');

  }else{
    console.log('비밀번호를 잘못 입력하셨습니다');
  }

}else if(userName === null || userName?.replace(/\s*/g,'') === ''){
  console.log('취소');
//replace()는 (문자의 메서드) 찾고 뒤에껄로 바꿔라 'hello.replace('h','p')->pello

//.toLowerCase() 전부 다 소문자로 나옴

}else{
  console.log('실패!');

}

