//how to apply breakpoints for debbuging

//go on inspect---> source-->click on line numner to add breaakpoint-->then refresh-->at down side at inspect Window you will see icon downArrow click it for next and then record call stack
function one() {
  return 1;
}

function two() {
  return one() + one();
}

function three() {
  let ans = two() + one();
  console.log(ans);
}
three();

//callback hell-->nested callbacks(callback is passing function in a function)
h1 = document.querySelector("h1");
function chngColor(color, delay, nextColor) {
  setTimeout(() => {
    h1.style.color = color;
    if (nextColor) {
      nextColor();
    }
  }, delay);
}

chngColor("red", 1000, () => {
  chngColor("orange", 1000, () => {
    chngColor("green", 1000, () => {
      chngColor("blue", 1000, () => {
        chngColor("pink", 1000,()=>{
            chngColor("purple",1000);
        });
      });
    });
  });
});

//this cane be modifed as (last lecture of this part)
//and further modified as shown in part 12

h2=document.querySelector("h2");

function changColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h2.style.color = color;
      resolve("color changed");
    }, delay);
  });
}

changColor("red",1000)
.then(()=>{
    console.log("red, color changed");
    return changColor("orange",1000);
})
.then(()=>{
    console.log("orange, color changed");
    return changColor("green",1000);
})
.then(()=>{
    console.log("green, color changed");
    return changColor("blue",1000);
})
.then(()=>{
    console.log("blue, color changed");
    return changColor("pink",1000);
})
.then(()=>{
    console.log("pink, color changed");
    return changColor("purple",1000);
})

//this is written so thst every color chnges after 1 sec of exection of first but its so confusinghence it is called callback hell
//which is mainly occured due to asynchoronous nature of js and to avoid t we use promises or async and await

// function saveToDb(data, success, failiure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failiure();
//   }
// }

// saveToDb(
//   "apna college",
//   () => {
//     console.log("success:data1 saved");
//     saveToDb(
//       "hello world",
//       () => {
//         console.log("success:data2 saved");
//         saveToDb(
//           "Mrunali",
//           () => {
//             console.log("success:data3 saved");
//           },
//           () => {
//             console.log("failiure:data3 not saved");
//           }
//         );
//       },
//       () => {
//         console.log("failiure:data2 not saved");
//       }
//     );
//   },
//   () => {
//     console.log("failiure:data not saved");
//   }
// );

//this code can be optimized using promise

function saveToDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("sucess: data1 was saved");
    } else {
      reject("failiure:data1 not saved");
    }
  });
}

// saveToDb("apna College") // returns a promise
//   .then(() => {
//     console.log("promise was resolved"); // this will run if the promise is resolved
//   })
//   .catch(() => {
//     console.log("promise was rejected"); // this will run if the promise is rejected
//   });

//for doing the thing that if 1st data is saved then only 2nd will be saved we can do promise chaining
//and for multiple then we use only one catch
saveToDb("apna College") // returns a promise
  .then(() => {
    console.log("data1 saved"); // this will run if the promise is resolved
    return saveToDb("helloworld");
  })
  .then((result) => {
    console.log("data2 saved");
    console.log("result of promise: ", result);
    return saveToDb("Mrunali");
  })
  .then((result) => {
    console.log("data3 saved");
    console.log("result of promise: ", result);
  })
  .catch((error) => {
    console.log("promise was rejected"); // this will run if the promise is rejected
    console.log("error of promise: ", error);
  });
