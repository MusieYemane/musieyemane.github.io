let count=10;
var c=20;

if("ALways true except 0"){
  console.log("Well done");
}

function sqr(n){
  return n*n;
}

console.log(sqr(3));

const sqr_anon= function(n){
  return n*n;
};
console.log(sqr_anon(4))
//anonymous function with a name used inside itself
const fact= function f(n){
  return (n>0)? n*f(n-1):1;
};
console.log(fact(2))
