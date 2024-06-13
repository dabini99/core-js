/* ---------------------------------------------------------------------- */
/* Iterable Object                                                        */
/* ---------------------------------------------------------------------- */

// 배열을 일반화 한 객체
// for-of 문을 사용할 수 있는 객체
// Symbol.Iterator 메서드가 필히 구현되어야 함
// Symbol.Iterator 메서드는 이터레이터 객체를 반환하며
// 이터레이터 객체는 next() 메서드를 가짐 ({ done: Boolean, value: any } 타입 반환)


const arr = '1 2 3 4 5 6'.split(' ');

const iter = arr[Symbol.iterator]();

// for(const a of iter){
//   console.log(a);
// }


//특징은 다음순환은 돌아가지 않는다 . 이미 끝나서


console.log(iter.next().value);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());


const renge = {
  from:1,
  to:5,
  length:5,
  [Symbol.iter]
}



// 유사배열 vs. 이터러블
// - 유사배열 : 인덱스 키와 length 속성을 가진 객체
// - 이터러블 : Symbol.Iterator 메서드를 가지는 객체


// 유사배열, 이터러블 배열화