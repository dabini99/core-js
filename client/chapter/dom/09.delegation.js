/* ------------------------ */
/* Event delegation         */
/* ------------------------ */


const nav = getNode('nav');


function handleClick(e){
  const target = e.target;
  const name = target.dataset.name;
  const li = target.closest('li');

if(!li) return;
  // if(target.tagName !== 'LI') return;  //ul을 걸러내기 위해서 만든 코드

/* 클래스를 사용한 위임 ---------------- */
// e.target안에 우리가 원하는 클래스가 있어

// if(target.matches('about')) console.log('about!!');
// if(e.target.classList.contains('home')){
//   console.log('home!!');
// }

// if(e.target.classList.contains('contact')){
//   console.log('contact!!');
// }

/* 속성을 사용한 위임 ------------------ */

// console.log(target.getAttribute('data-name'));
// console.log(target.dataset.name);
// console.log(attr(target,'data-name'));

// if(name === 'about') console.log('about!');
// if(name === 'home') console.log('home!');
// if(name === 'contact') console.log('contact!');



/* 노드를 사용한 위임 ------------------ */
//정확히 li만 조회를 해야한다
if(li.textContent.includes('ABOUT')) console.log('about!');
if(li.textContent.includes('HOME')) console.log('home!');
if(li.textContent.includes('CONTACT')) console.log('contact!');



}


nav.addEventListener('click',handleClick)


const navList = document.querySelectorAll('nav li');




navList.forEach((li,i)=>{
  li.addEventListener('click',()=>{
    console.log(i);

    switch (i) {
      case 0: console.log('about'); break;
      case 1: console.log('home'); break;
      case 2: console.log('contact'); break;
    }
  })
})