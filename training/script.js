// syntaxe de la fonction
function moi() {
  console.log("bonjour a tous");
}
moi(); //appel de la fonction par son nom +()
const hellow = () => {
  console.log("hiiiiiiii");
};
hellow(); //2eme methode arrow function

function me(name) {
  console.log("hello " + name);
}
me("selma");

function num(number) {
  console.log(number);
}
let number = 1;
number++;
num(number);

function me(age) {
  console.log("hello i'm kagoura and i'm " + age);
}
me(25);

function math(a, b) {
  console.log(a + b);
}
let a = 10;
let b = 20;
a++;
math(a, b);
let x = why(10, 20);

function why(e, f) {
  return e * f;
}
console.log(x);

function t1(a1, b1) {
  return a1 + b1;
}
let a1 = 10,
  b1 = 30;

console.log(t1(a1, b1));

// instruction if // instruction if // instruction if // instruction if // instruction if

function nino(n) {
  if (typeof n === "number") {
    console.log(n);
  } else {
    console.log("not a thing");
  }
}
nino("25");

// else if // else if // else if // else if // else if
function mami(u) {
  if (u === 1) {
    console.log("red");
  } else if (u === 2) {
    console.log("bleu");
  } else if (u === 5) {
    console.log("yellow");
  } else {
    console.log("not a color");
  }
}
mami(5);
// loop while  // loop while // loop while // loop while // loop while // loop while
let f = [1, 2, 3, 4, 5];
let somme = 0;
let i = 0;
while (i < f.length) {
  somme = somme + f[i];
  i++;
}
console.log(somme);
// break  // break  // break  // break
let a = [12, 20, 30, 40, 50];
let sum = 0;
let i = 0;
while (i < a.length) {
  sum += a[i];
  i++;
}
console.log(sum);

let a=[12,20,30,40,50]
    let sum=0
    let i=0
    while (i< a.length){
    sum+= a[i]
    i++
    }
    console.log(sum)

let a=[12,20,30,40,50]
    let sum=0
    let i=0
    for (i=0; i<a.length; i++){
        sum+=a[i]
    }
  
    console.log("this is it "+sum)
