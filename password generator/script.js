const input = document.querySelector("input");
const btn = document.querySelector("button");
const caracter =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*(<>)_-+.";
 
function clickbutton() {
   let password = "";
  for (let i = 0; i <10; i++) {
    const randomIndex = Math.floor(Math.random() * caracter.length);
    password = password + caracter[randomIndex];
    input.value = password;
  }
}
  

  // teacher methode
  // function generate() {
  //   const caracter =
  //     "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+";
  //   let password = "";
  
  //   for (let i = 0; i < 10; i++) {
  //     const randomIndex = Math.floor(Math.random() * caracter.length);
  //     password = password + caracter[randomIndex];
  //   }
  //   document.querySelector("input").value = password;
  // }


//my 1st attempt

// const input = document.querySelector("input");
// const button = document.querySelector("button");
// const generat = Math.random().toString(36).substring(2, 7);
// console.log(generat);
// function generate() {
//   const caracter =
//     "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+";
//   let password = "";

//   for (let i = 0; i < 10; i++) {
//     const randomIndex = Math.floor(Math.random() * caracter.length);
//     password = password + caracter[randomIndex];
//   }
//   document.querySelector("input").value = password;
// }
