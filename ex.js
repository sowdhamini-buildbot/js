// console.log("I");
// console.log("eat");
// setTimeout(() => {
//   console.log("icecream ");
// }, 3000);

// console.log(" with a");
// console.log("spoon");
//asynchronus-
// callback -calling a function inside another function as an argument is called callback

// let order = (call_production) => {
//   console.log("order placed ,go to production");
//   call_production();
// };
// let production = () => {
//   console.log("production started");
// };
// order(production);

// let paymentDone = (enterClass) => {
//   console.log("payment done,enter class");
//   enterClass();
// };
// let enterClass = () => {
//   console.log("in class");
// };
// paymentDone(enterClass);

let stocks = {
  fruits: ["apple", "banana"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup"],
  toppings: ["chocolates", "peanuts"],
};
let order1 = (production1) => {
  setTimeout(() => {
    console.log(`${stocks.fruits[0]} was selected`);
  }, 0000);
  production1();
};
let production1 = () => {
  setTimeout(() => {
    console.log("production started");
    setTimeout(() => {
      console.log("the fruit has been choped");
      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
        setTimeout(() => {
          console.log("the machine was started");
          setTimeout(() => {
            console.log(`icecream was placed on ${stocks.holder[0]} `);
            setTimeout(() => {
              console.log(`${stocks.toppings[1]} was added as toppings`);
              setTimeout(() => {
                console.log("serve the icecream");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0000);
};
order1(production1);
