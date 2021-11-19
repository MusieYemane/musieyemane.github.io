// let count = 10;
// var c = 20;

// if ("ALways true except 0") {
//   console.log("Well done");
// }

// function sqr(n) {
//   return n * n;
// }

// console.log(sqr(3));

// const sqr_anon = function (n) {
//   return n * n;
// };
// console.log(sqr_anon(4))
// //anonymous function with a name used inside itself
// const fact = function f(n) {
//   return (n > 0) ? n * f(n - 1) : 1;
// };
// console.log(fact(2))

// // Javascript objects

// const myObj = {
//   fname: "Musie",
//   lname: "Araia",
//   height: 1.77
// }
// delete myObj.height;

// for (let x in myObj) {
//   console.log(myObj[x]);
// }

// // setTimeout(sqr, 2000);
// // setTimeout(sqr(4), 2000);

// timer = null; // stores ID of interval timer 
// function delayMsg2() {
//   if (timer === null) {
//     timer = setInterval(rudy, 1000);
//   } else {
//     clearInterval(timer);
//     timer = null;
//   }
// }
// function rudy() { // called each time the timer goes off
//   // document.getElementById("output").innerHTML += " Rudy!";
//   console.log("Rudy");
// }

// // delayMsg2()

// var rudyTimer= (function(){
//   timer = null; // stores ID of interval timer 
//   function delayMsg2() {
//      if (timer === null) {
//          timer = setInterval(rudy, 1000);
//      } else {
//           clearInterval(timer); 
//           timer = null;
//       }  }
//   function rudy() { // called each time the timer goes off
//       // document.getElementById("output").innerHTML += " Rudy!";
//       console.log("Rudy");

//     }
//     return {
//       delayMessage: function(){
//         delayMsg2();

//       }

//     }

// }());

// rudyTimer.delayMessage();


// Predict the result of the following code
console.log("=========================");
x = 1;
var a = 5;
let b = 10;
var c = function (a, b, c) {
  // var x = 10;
  console.log(x);
  console.log(a);
  var f = function (a, b, c) {
    const d = 5;

    console.log(d);
    b = c;
    var x = 5;
  }
  f(a, b, c);

  console.log(b);
  var x=10;
}
c(8, 9, 10);
console.log(b);
console.log(x);


console.log("=========================");

//Scope
var x = 9;
function myFunction() {
  return x * x;
}
console.log(myFunction());
x = 5;
console.log(myFunction());
console.log("================");

var foo = 1;
function bar() {
        if (!foo) {
             var foo = 10; // this var is accessible within the entire function
        }
        console.log(foo); // 10, but if it was let foo or just foo, then it gives 1 coz it has block scope
} 

bar();

console.log("=================");


var count= (function(){
  var counter=0;
  return {
    add: function () {
      return counter += 1;
    },
    reset: function (){
      return counter=0;
    }
  }
})()


console.log(count.add())
console.log(count.add())
console.log(count.reset())
console.log(count.add())


console.log("=================");



//Create an object that has properties with name = "fred" and major="music" 
//and a property that is a function that takes 2 numbers and returns the smallest of the two, 
//or the square of the two if they are equal.
const myObject = {
  name: "fred",
  major: "music",
  myFunction: function (a, b) {
    if (a == b) { return a * a + b * b }  // square of what??
    else if (a < b) { return a }
    else { return b }
  }
}
console.log(myObject.myFunction(2, 2));


//Write Javascript code for creating three Employee objects using the "new" keyword and 
//a constructor function. Employee objects have the following fields: name, salary, position.

function Employee(ename, esalary, eposition) {
    this.name = ename,
    this.salary = esalary,
    this.position = eposition
}
const emp1 = new Employee("Musie Yemane", 200000, "President");
const emp2 = new Employee("Freedom Araia", 100000, "Programmer");
const emp3 = new Employee("Surafael Yemane", 150000, "Manager");

console.log(emp3.name);

//Write a Javascript function that takes any number of input arguments 
//and returns the product of the args
function product() {
  let prod = 1;
  for (let i = 0; i < arguments.length; i++) {
    prod *= arguments[i];
  }
  return prod;
}
console.log(product(3, 5));


//Write an arrow function that returns the maximum of its three input arguments.
const max = (a, b, c) => {
  if (a > b && a > c) { return a; }
  else if (b > c) { return b; }
  else { return c; }
};

console.log(max(4, 7, 3));







console.log("=================");

var Employee = (function () {
  var name, age, salary;

  var getAge = function () {
                  return age;
               };
  var getSalary = function () {
                       return salary;
                  };
  
  var setAge = function (newAge) {
                  age = newAge;
               };
  var setSalary = function(newSalary){
                      salary = newSalary;
                  };
  var setName = function(newName){
                    name = newName;
                };
  var increaseSalary = function(percentage){
                          var sal = getSalary();
                         setSalary(sal + (sal*percentage)*0.01);
                      };
  var incrementAge = function(){      
                          var newAge = getAge() + 1;
                          setAge(newAge);
                  };
  return {
      setAge: setAge,
      setName:setName,
      setSalary:setSalary,
      increaseSalary:increaseSalary,
      incrementAge: incrementAge
  };
})();

Employee.setName("Musie Yemane");
Employee.setAge(25);
Employee.setSalary(250000);

// object extension
Employee.city="";
Employee.setCity=function(newCity){
  this.city=newCity;
  };
Employee.getCity=function(){
return this.city;
};

Employee.setCity("Mendefera");
console.log(Employee.getCity());

console.log("=================");

var make_adder = function(inc){
  let counter = 0;
  return function(){
       return counter+= inc;     
}
};

add5 = make_adder(5);
add5( ); add5( ); add5( ); // final counter value is 15
add7 = make_adder(7);
add7( ); add7( ); add7( ); // final counter value is 21

console.log("======Promise===========");

let p= new Promise(

  function(resolve, reject){
    let a= 4+1;
    if(a==2){
      resolve("Success");
    }else{
      reject("Failed");
    }
  }
);

p.then(msg=>{  // then captures the resolve
  console.log(msg); 
}).catch(msg=>{   //catch captures the reject
  console.log(msg);
});

const promise = new Promise((resolve, reject) => { reject('Hattori');
});
promise.then(
  val => console.log('Success: ' + val)
  ).catch(e => console.log("Error: "+e));

  const promise2 = new Promise((resolve, reject) => { resolve('Hattori');
    setTimeout(()=> reject('Yoshi'), 500); });

    promise2.then(val => console.log('Success: ' + val)) .catch(e => console.log('Error: ' + e));


    function job(state) {
      return new Promise(function(resolve, reject) {
              if (state) {
                  resolve('success');
              } else {
                  reject('error');
      } });
      }
      let promise3 = job(true);
      promise3.then(function(data) {
        console.log(data);
        return job(false);
      })
      .catch(function(error) {
              console.log(error);
              return 'Error caught';})

 console.log("=================");

var a=12;
function f(){
  if(a>0){
    var a=4
  }
  console.log(a);
}
f();

var myObj= {

}
function m(n){
  return n;
}
myObj.m= m;

console.log(myObj.m("musie"));

console.log("=================");

var a= 10;
function f(){
  var b=20;
  function g(){
    var c=a+b;
    return c;
  }
  b=30;
  return g;
}
myFunc= f();
x1= myFunc();
console.log(x1);

a=100;
y1= myFunc();
console.log(y1);
//output 40 130


