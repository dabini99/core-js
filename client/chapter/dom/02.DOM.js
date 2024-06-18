/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children 유사배열이 나오는데 유사배열을 가지고 반복을 돌릴 수 있다
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

/* 문서 대상 확인 */
// - matches
// - contains




//1. id가 visual-section인 section 태그 요소
// document.getElementById('visual-section');
// document.querySelector('#visual-section');
// const section = document.querySelector('#visual-section');

//2.class가 list인 ul 태그 요소
// document.querySelector('.list');
// const list = section.querySelector('.list');

//3.list가 요소 안에 about li 태그 요소 (ul안에 있는 2번째 li)
// document.querySelector('.list > li:nth-child(2)');
// const about = list.querySelector('li:nth-child(2)');

//4. name속성이 search-box인 form 태그 요소
// const form = document.querySelector('form[name="search-box]')

//5.form 요소 안에 있는 모든 자식 요소
// const children = form.children
// const children = form.querySelectorAll('*')

//6.form 요소 안에 있는 input 태그 요소
// const input = form.lastElementChild;
// const input = children[children.length -1]

/* -------------------------------------------------------------------------- */

getNode('.list')//[li,li]


// 1. id가 visual-section인 section 태그 요소
const section = document.querySelector('#visual-section');


// 2. class가 list인 ul 태그 요소
const list = section.querySelector('.list');


// 3. list 요소 안에 about li 태그 요소
const about = list.querySelector('li:nth-child(2)');


const aboutli = [...list.children].find((li)=>{
  return li.textContent === 'about';
}) //유사배열을 배열로 만들어서 각각을 가지고 오는 것 /.textContent는 안에있는 글자들만 뽑아옴 / 그다음 비교 === 'about'으로 /fotEach를 find로 바꾸고 return할거임

// const aboutLi = [...list.children].find(li => li.textContent === 'about') //위의 코드를 축약

// 4. name 속성이 search-box인 form 태그 요소
const form = document.querySelector('form[name="search-box"]');


// 5. form 요소 안에 있는 모든 자식 요소 
const children = form.children
// const children = form.querySelectorAll('*')


// 6. form 요소 안에 있는 input 태그 요소 
// const input = form.lastElementChild;
const input = children[children.length -1];