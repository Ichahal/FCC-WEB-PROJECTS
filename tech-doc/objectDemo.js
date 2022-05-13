"use strict";

// for object intro
const profile = {
  firstName: "Aman",
  age: 22,
  email: "aman.0002@icloud.com",
};

// for dot notation
profile.lastName = "Chahal";

// for bracket notation
profile["occupation"] = "student";

// for array in object
profile.dayMonthYear = [28, 11, 2021];

// for object in object
profile["time"] = {
  hour: 10,
  minutes: 30,
  amOrPM: "am",
};

// for function in object
profile.birthYear = function () {
  return this.dayMonthYear[2] - this.age;
};

console.log(profile);
