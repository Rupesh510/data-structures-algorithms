/**
 * Reference Types in JavaScript
 */

const object1 = {
  value: 10,
};

const object2 = object1;

const object3 = {
  value: 10,
};

console.log("object1 === object2", object1 === object2);
console.log("object1 === object3", object1 === object3);

object1.value = 15;

console.log("object1.value", object1.value);
console.log("object2.value", object2.value);
console.log("object3.value", object3.value);
