/* ---------------- */
/* Condition        */
/* ---------------- */

// const result = prompt('자바스크림트의 "공식" 이름은 무엇일까요?','');

// if(result === 'ECMAScript'){
//   alert('정답입니다');
// }else{
//   alert('모르셨나요? 정답은 ECMAScript입니다')
// }



function watchingMovie(){
  // 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No
  // 영화 봤니?
let didWatchMovie = confirm('너 그 영화 봤어?');
if(didWatchMovie){
  console.log('그 영화 재미있더라');
}else{
  
  let goingToWatchMovie = confirm('영화 볼꺼니?');

  if(goingToWatchMovie){
    //영화 볼꺼야
    let withWho = prompt('누구랑 볼꺼니?','');
    if(withWho === 'you'){
      console.log('사랑해');
    }else{
      console.log('왜 나랑 안봐?');
    }
  
  }else{
    //안봐
    console.log('그래 나중에 봐라');
  }
}

// 영화 볼거니?

}

// if 문(statement)

// else 절(clause)

// else if 복수 조건 처리

// 조건부 연산자 삼항식
let didWatchMovie = 'no';
let goingToWatchMovie = 'yes';

// const message = didWatchMovie === 'yes' ? '그 영화 참 재밌더라' : '다음에 같이 볼래?';

const message = didWatchMovie.includes('yes') ? '그 영화 참 재밌더라' : goingToWatchMovie.includes('yes') ? '언제볼까?' : '그래,,';




// 멀티 조건부 연산자 식

//* 삼항식 => 값을 반환
function render(node,isActive){
  
  let template = `
    <div>${isActive ? '안녕~~!!' : '잘가~~!!'}</div>
  `
  node.insertAdjacentHTML('beforeend',template);
}

// render(document.body,false/true)