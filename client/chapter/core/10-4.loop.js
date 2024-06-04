/* ---------------- */
/* For In Loop      */
/* ---------------- */



const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
  hasOwnProperty(){
    return '난 누굴까~?'
  }
};


// Object.prototype.nickName = '호랑이';

// console.log( 'nickName' in javaScript );

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?




// 객체 자신의 속성인지 확인하는 방법
// - "자신(own)의 속성(property)을 가지고(has)있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?


// console.log( javaScript.hasOwnProperty('nickName') );

                                        // 메서드 빌려쓰기 
// console.log( Object.prototype.hasOwnProperty.call(javaScript,'nickName') );
// console.log( {}.hasOwnProperty.call(javaScript,'nickName') );


// function method


// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?


//enumerable : 열거 가능한 /얘네를 찾아서 아래 애가 찾아줌 / 우리가 열거한 것만 enumerable이 됨

for(let key in javaScript){

  if(Object.prototype.hasOwnProperty.call(javaScript,key)){

    // console.log(key);
    // console.log(javaScript[key]);
  }
}

/* -------------------------------------------------------------------------- */
const obj = {}


obj.nickName = 'tiger'


// Object.defineProperty(obj,'age',{
//   value:30,
//   enumerable: true,
//   writable: false,
//   configurable:true
// })


// Object.defineProperties(obj,{
//   age:{
//     value:30,
//     enumerable:true,
//     writable:true
//   }
// })

//점 표기법 => 변수설정 x
// 대괄호 표기법 => 변수 설정 o

const tens = [10,100,1000,10_000];

for(let key in tens){
  console.log(tens[key]);
} //배열을 순환하는 용도로도 사용이 가능하다 벗, 권장은 안한다 순서가 중요한 배열에 정확한 순서를 보장하지 않는다 그니까 객체한테 양보하자