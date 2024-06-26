
const ENDPOINT = 'https://jsonplaceholder.typicode.com/users'

const tiger = async() =>{

  const response = await fetch(ENDPOINT);
  let data;

  if(response.ok){

    data = await response.json();
  }
  
  return data;
}

console.log(tiger());