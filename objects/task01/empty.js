// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// Should work like that:

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false

let isEmpty = (object) => {
    let keyNumber = 0;
    for (key in object) keyNumber++;
    return !keyNumber;
  }