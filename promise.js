let stocks = {
  fruits: ["apple", "banana"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup"],
  toppings: ["chocolates", "peanuts"],
};
// let order = (production) => {
//   console.log(`${stocks.fruits[0]} was selected`);
//   production();
// };
// let production = () => {
//   setTimeout(() => {
//     console.log("production started");
//     setTimeout(() => {
//       console.log("the fruits has been chopped");
//       setTimeout(() => {
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
//         setTimeout(() => {
//           console.log("machine was started");
//           setTimeout(() => {
//             console.log(`icecream was placed on ${stocks.holder[0]}`);
//             setTimeout(() => {
//               console.log(`${stocks.toppings[1]} was added as toppings`);
//               setTimeout(() => {
//                 console.log("ready to serve");
//               }, 0000);
//             }, 1000);
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   });
// };
// order(production);

// let isShopOpen = false;
// let order = (time, work) => {
//   return new Promise((resolve, reject) => {
//     if (isShopOpen) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else {
//       reject(console.log("our shop is closed"));
//     }
//   });
// };
// order(2000, () => console.log(`${stocks.fruits[0]}`))
//   .then(() => {
//     return order(0000, () => {
//       console.log("production has started");
//     });
//   })

//   .then(() => {
//     return order(1000, () => {
//       console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
//     });
//   })

//   .then(() => {
//     return order(1000, () => {
//       console.log("machine was started");
//     });
//   })
//   .then(() => {
//     return order(2000, () => {
//       console.log(`icecream was placed on ${stocks.holder[0]}`);
//     });
//   })
//   .then(() => {
//     return order(3000, () => {
//       console.log(`${stocks.toppings[1]} was added as toppings`);
//     });
//   })
//   .then(() => {
//     return order(2000, () => {
//       console.log("ready to serve");
//     });
//   })
//   .catch(() => {
//     console.log("customer left");
//   });

let shopIsOpen = true;
function time(ms) {
  return new Promise((resolve, reject) => {
    if (shopIsOpen) {
      setTimeout((resolve, ms));
    } else {
      reject(console.log("shop is closed"));
    }
  });
}
async function kitchen() {
  try {
    await time(0000);
    console.log(`${stocks.fruits[0]}`);
    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
    await time(2000);
    console.log("machine was started");
    await time(1000);
    console.log(`icecream was placed on ${stocks.holder[0]}`);
    await time(3000);
    console.log(`${stocks.toppings[1]} was added as toppings`);
    await time(1000);
    console.log("ready to serve");
  } catch (error) {
    console.error("customer left");
  } finally {
    console.error("day ended ");
  }
}
kitchen();
