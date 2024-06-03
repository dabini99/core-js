/* ---------------------------- */
/* Nullish Coalescing Operator  */
/* ---------------------------- */

let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) { //만약에 이거라면 
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.
receivedEmailAddress = (emailAddress === undefined || emailAddress === null) ? 'user@company.io' : emailAddress;

// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.

receivedEmailAddress = emailAddress ?? 'user@company.io';
//emailAddress이 null,undefined라면 user@company.io를 반환해라 아니라면 emailAddress값을 반환해라

receivedEmailAddress = emailAddress || 'user@company.io';

/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환

const WIDTH = '10px';
const isActive = false;

console.log( null || WIDTH );
console.log( null ?? WIDTH );
console.log( 0 ?? WIDTH );

console.log( undefined || WIDTH);
console.log( undefined |?? WIDTH);

console.log( isActive || WIDTH);
console.log( isActive |?? WIDTH);

a ||= b //비교해보고 첫번째 트루시가 떳다면 에이에 넣겠다 a = a || b , a가 false일 때 b값을 a에 할당
a &&= b //a가 true일때 b값을 a에 할당
a ??= b //에이가 언디파인드 눌일떄 비값을 에이에 할당