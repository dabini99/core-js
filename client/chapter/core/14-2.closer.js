




function earth(){

  let water = true;
  let gravity = 10;

  function tiger(){
    return [water,gravity];
  }

  return tiger
}

const ufo = earth() //tiger가 나옴

ufo(-10)

//호랑이는 내가 살고있는 환경을 전부 기억하고 있음
//호랑이가 엄청 큰 중법죄를 저질러서 지구를 쫓겨남
//유에프오가 등장해서 호랑이를 가지고 감
// 가져가서 지내 행성에 둠
//외계인이 직접 못들어가니까 호랭이한테 물어봄
//물 있어 없어?? 있어요,,ㅜ
//지구의 중력 뭐애ㅑ 불어!
//물이랑 중력 다 담어서 보내ㅐㅐ
//내가 포탈 열어줄테니까 고향 다녀와라 근데 그냥은 안뎅
//대신 내가 원하는거 담아서 보내라
// 지구 중력 -10으로 바꿔

//우주 쓰래기 줘담는 가비지 컬렉터가 돌아다님
//호랭이는 담아져 있는거라 가비지 컬랙터가 안가지고 그냥 감

// function earth(){
 
//   let water = true;
//   let gravity = 10;
  
//   return  (value) => {
//     gravity = value;
    
//     return [water,gravity]
//   }
// }


// const ufo = earth()




// ufo(-10)
/* -------------------------------------------------------------------------- */


const button = document.querySelector('button');




/* normal function */
// function handleClick(){

//   let isClicked = false;

  
//   function inner() {
//     if(!isClicked){

//       document.body.style.background = 'orange'
//     }else{
  
//       document.body.style.background = 'white'
//     }
  
//     isClicked = !isClicked;
//   }

//   return inner;
// }

// IIFE
/* arrow function */
const handleClick = (() => {

  let isClicked = false;
  
  return () => {
    if(!isClicked){

      document.body.style.background = 'orange'
    }else{
  
      document.body.style.background = 'white'
    }
  
    isClicked = !isClicked;
  }

})()


button.addEventListener('click',handleClick)


/* -------------------------------------------------------------------------- */
function state(init){
  let value = init;

  function read(){
    return value;
  }

  function write(newValue){
    value = newValue;
  }

  return [read,write];
}

const result = state(10);






