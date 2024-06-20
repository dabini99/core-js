/* --------------------- */
/* Event Handling        */
/* --------------------- */


/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"

function handler(){
  console.log('클릭 이벤트 발생!!!');
}

// 2. DOM 프로퍼티 : element.onclick = handler
const first = getNode('.first');
// first.onclick = handler;



// 3. 메서드 : element.addEventListener(event, handler[, phase])


function handleClick(e){
  console.log(e.type);
  console.log(e.target);
  console.log(e.offsetX);

}


const second = getNode('.second');

// second.addEventListener('click',firstEventRemove)





/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener





const ground = getNode('.ground');
const ball = getNode('#ball');


function handleClickBall(e){

  const {offsetX:x, offsetY:y} = e;
  // let x = e.offsetX;
  // let y = e.offsetY;


  ball.style.transform = `translate(${x - (ball.offsetWidth / 2)}px,${y - (ball.offsetHeight / 2)}px)`

}

// ground.addEventListener('click',handleClickBall)

function handleMove({offsetX:x, offsetY:y}){
  console.log(x,y);
  let template = /* html */`
  <div class="emotion" style="top:${y - 16}px; left:${x - 16}px;">😍</div>
  `

  insertLast(ground,template);
}


function debounce(callback,limit = 500){
  let timeout;
  return function (e){
    clearTimeout(timeout)
    timeout = setTimeout(()=>{
      callback.call(this,e)
    },limit)
  }
}



ground.addEventListener('mousemove',debounce(handleMove))




//throttle(수도꼭지) 입구를 막아서 얘들이 적당히만 나오도록
//debounce(공 튀김 방지) 계속 막다가 멈추는 순간 튀김








// addClass('.ground',['a','b','c'])
// addClass('.ground','a','b','c')
// addClass('.ground','a,b,c')
// addClass('.ground',{a:'one',b:'two'})





//ground에 마우스를 움직이는 순간순간이 호출임
