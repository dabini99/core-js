function getNode(node,context = document){
  // if(isString(context)){
  //   context = document.querySelector(context);
  // }

  if(context.nodeType !== 9) context = document.querySelector(context);

  return context.querySelector(node)

}
getNode('.first')

function getNodes(node,context = document){
  if(context.nodeType !== 9) context = document.querySelector(context);

  return document.querySelector(node)

}