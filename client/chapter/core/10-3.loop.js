/* ------------ */
/* For Loop     */
/* ------------ */



// 2 ~ 10까지의 짝수 출력하기

// n % 2 !== 0 //condinue

// let j = 0;
// while(j <= 10){
  
//   j++

//   if(j % 2 !== 0) continue

//   console.log(j);
// }

/* -------------------------------------------------------------------------- */
// let p = 0
// for(; p <= 10; ){
//   p++
//   if(p % 2 !== 0) continue
//   console.log(p);
  
// }


const frontEndDev = 'HTML CSS SVG JavaScript jQuery React Redux'.split(' ');  //문자가 있다->얘를 찍어보니 배열이 나온다 .split 메서드: 문자들 중에서 ()괄호 안을 기준으로 쪼개서 값을 반환하는데 배열을 해당 반환한다

let i = 0;
let l = frontEndDev.length;

while(i < l) { //i가 l보다 작을 때 까지 돌려줌
  // console.log(frontEndDev[i]); //배열의 n번째에 접근
  i += 1;
}


// while 문 → for 문 (순환)
// - 실행 흐름
// - 순환 중단 또는 이어서 순환
//   - 조건이 맞을 경우, 이어서(continue) 순환
//   - 조건: SVG, jQuery는 출력하지 마세요.



// for(let l = 0; i < l; i++){
//   let value = frontEndDev[i]

//   console.log(value);
// }
// for(let i = 0; i < l; i++){
//   let value = frontEndDev[i];
//   let lower = value.toLocaleLowerCase();
//   if(value.includes('jQuery') || value.includes('SVG')) continue;

//   console.log( value );

// }
for(let i = 0; i < l; i++){
  let value = frontEndDev[i];
  let lower = value.toLocaleLowerCase();
  // if(value.includes('jQuery') || value.includes('SVG')) continue;
  if(lower.includes('jQuery')) break;

  // console.log( value );

}






//   - 조건이 맞을 경우, 순환 중단(break)
//   - 조건: JavaScript 까지만 출력하세요.


//   - 무한 루프 (브레이크)
//   - for 문 (역순환)

// for(let i = 0; i < l; i++){
//   console.log( frontEndDev.pop()); //역방향/ 뒤에서 부터 하나씩 빼내는게 pop, 제거된 대상을 반환 -> 배열 다 날라감
// }
for(let i = 0; i < l; i++){
  
  console.log( frontEndDev.shift()); //정방향/ 앞에서부터 제거, 제거된 대상이 튀어나옴 -> 배열 다 날라감 /대신 새로운 배열을 복사해둬야 안전함
}

// for(let i = l, subject; subject = frontEndDev[--i];){
//   console.log(subject);
// }







