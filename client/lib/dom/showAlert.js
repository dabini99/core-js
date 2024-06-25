import { addClass, removeClass } from "./css.js"
import { isString } from "../utils/type.js";
import { getNode } from "./getNode.js";

/**
 * 
 * @param {HTMLElement | String} node 
 * @param {String} message 
 * @param {Number} timeout 
 * @returns {void}
 */
//void 어떠한 값도 일절 내보내지 않겠다 / 이 함수는 아무것도  내보내지 않겠다 라는 뜻
export function showAlert(node,message,timeout = 1000){

  if(isString(node)) node = getNode(node)

    node.textContent = message;

  addClass(node,'is-active');
    setTimeout(()=>{
      removeClass('.alert-error','is-active')
    },timeout)
}

