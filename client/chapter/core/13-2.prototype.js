
// Model 데이터
// View 렌더링
// Control 이벤트










/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.


//1.객체의 상속
//2.생성자 함수의 상속
// 3.생성자 함수를 모던한 방식으로 사용할 수 있는 class



class Animal {

  constructor(name){
    this.legs = 4;
    this.tail = true;
    this.stomach = []
  }

  get eat(){
    return this.stomach
  }
  set eat(food){
    this.stomach.push(food)
  }

}


const a = new Animal('포동이');


class Tiger extends Animal {
  constructor(name){
    super(name)
    this.pattern = '호랑이 무늬'
  }

  static bark(sound){
    return sound + '🐯'
  }

  hunt(target){
    return `${target}에게 조용히 사부작 접근한다`
  }
}


const 호랑이 = new Tiger('호돌이')



