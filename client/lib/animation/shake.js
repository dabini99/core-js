/* global gsap */

export function shake (t){

      
  const animation = gsap.to(t,{
    duration:0.1,
    x:-10,
    repeat:5,
    yoyo:true,
  })

  return animation
//참조 객체를 만들어서 내보내겠다
}