// Write a function to check whether input is an array or not without using isArray
function valueIsArr(value) {
  return typeof value === "object" && value.constructor === Array
    ? "true"
    : "false";
}

const arr1 = [1, 2, 3, 4, 5];
// console.log(valueIsArr({}));

// Clone an array without using JSON.stringify()
function cloneArray(arr) {
  const clone = [];
  for (let i = 0; i < arr.length; i++) {
    clone.push(arr[i]);
  }
  return clone;
}
// console.log(cloneArray([2, 3, 4, "5"]));

//Create a function that will create an array made of length elements; fill elements with their indexes
function createArr(num) {
  const myArr = [];
  for (let i = 1; i <= num; i++) {
    myArr.push(i);
  }
  return myArr;
}

// console.log(createArr(4));

//Create a function that will return last even element of the array

function returLastEven(arr) {
  let even = arr.filter((item) => item % 2 === 0);
  let lastEven = even[even.length - 1];
  // let lastEven = even.pop() ___ it changes the original array
  return lastEven;
}

// console.log(returLastEven([2, 3, 5, 6]));

//Write a function that will flatten an array without using flat()

function flattenArr(arr, depth) {
  return depth > 0
    ? arr.reduce(
        (acc, value) =>
          acc.concat(
            Array.isArray(value) ? flattenArr(value, depth - 1) : value
          ),
        []
      )
    : arr.slice();
}
const arr2 = [
  [1, 2, 3, 4],
  [5, [[6], 9], 7],
];
// console.log(flattenArr(arr2, 3));

//Write a function to shuffle an array

///////Nothing better than the Fisher-Yates method//////////
function shuffleArr(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}
console.log(shuffleArr(["sun", "moon", "wind", "flowers"]));
