const allUsers = ["Marina", "Elena", "Julia"]; // length = 3

function consoleUser(user) {
  console.log(user);
}

// // while, for loop, forEach
// let i = 0;

// while (i < 3) {
//   // 3 < 3 = false
//   // if condition is true, then run below code
//   consoleUser(allUsers[i]); // allUsers[0] because i in first cycle = 0

//   i++; // i = i + 1;
// }

// console.log("after while loop");

// // for loop -> syntactic sugar
// for (let i = 0; i < 3; i++) {
//   consoleUser(allUsers[i]);
// }

// console.log("after for loop");

// forEach loop --> in-built method in JavaScript Array

allUsers.forEach((user) => {
  // do something
  consoleUser("user", user);
});

// console.log("after forEach loop");
