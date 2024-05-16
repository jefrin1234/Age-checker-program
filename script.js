function signIn(){
    
  let age = document.getElementById('age').value;
  
  let ageSpan = document.getElementById('age-span');
  let result = document.getElementById('success-not');

  if(age== ''){
    ageSpan.innerText='enter your age';
  }
  else{
    ageSpan.innerText='';
  }

  if(age >= 18){
    window.location.href = 'https://netflix.com';
  }
  else if(age<18){
    result.innerHTML='*Sign in failed*'
  }
}




console.log('start');

function data(callback){
  
  setTimeout ( () => {
    callback("debug media")
  },3000)
}

data(
  function jefrin (value)  {      
  console.log(value);
}
);

console.log("end")

  

// const callback = (value) => {      
//   console.log(value);
// }

// callback('hello');


const promise = new promise((resolve,reject))