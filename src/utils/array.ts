/* eslint-disable @typescript-eslint/no-unused-vars */
/*--------------------ARRAY-------------------*/
// It turns out we’ve been working with a type just like that throughout this handbook: the Array type. Whenever we write out types like number[] or string[], that’s really just a shorthand for Array<number> and Array<string>.

// Example 1:
type typeArrNumber = number[];
const arrNum: typeArrNumber = [1, 2, 3, 4, 5];

// Example 2:
type typeArrStr = string[];
const arrStr: typeArrStr = ["Hello", "World", "And", "Baby"];
