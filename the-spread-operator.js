/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4)
console.log("Second array:", arr2)
console.log("First array:", arr1)
// arr2 is being created directly from arr1, so any changes made to
// arr2 will also affect arr1

// Copying an array
let arr3 = [4, 5, 6]
let arr4 = [...arr3]
// the ... before something is the spread operator
// This creates a copy of whatever is put afterwards, allowing me to
// change the copy (arr4) without affecting the original (arr3)

arr4.push(7)
console.log("Third array", arr3)
console.log("Fourth array", arr4)
// Here 7 is added to arr4, but arr3 doesn't change

// Copying an object
let obj1 = {a: 1, b:2, c:3}
console.log(obj1)

let obj2 = {...obj1, d:4}
console.log(obj2)
// same as above but object instead of array.
// obj2 gets d:4 added to it, but obj1 doesn't change

// If I want to change one of the existing values of the object I
// I can just put that in. For example:
let obj3 = {...obj1, b:5, d:4}
console.log(obj3)
// Here the origal "b:2" becomes "b:5", and then continues as expected

// Copying only part of an array/object
let arr5 = [...arr1, {...arr3}, "x", "y", "z"];
console.log(arr5)
// Here I've copied arr1, created an object out of arr3, and added some extra
// strings to pad it out.

// to run this, paste node the-spread-operator.js into the terminal