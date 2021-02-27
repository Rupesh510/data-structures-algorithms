/**
 * Implementing An Array in JavaScript
 */

{
  class MyArray {
    constructor() {
      this.length = 0;
      this.data = {};
    }

    get(index) {
      return this.data[index];
    }

    push(item) {
      this.data[this.length] = item;
      this.length += 1;
      return this.length;
    }

    pop() {
      const lastItem = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length -= 1;
      return lastItem;
    }

    delete(index) {
      const item = this.data[index];
      this.shiftItems(index);
      return item;
    }

    shiftItems(index) {
      for (let i = index; i < this.length - 1; i += 1) {
        this.data[i] = this.data[i + 1];
      }
      delete this.data[this.length - 1];
      this.length -= 1;
    }
  }

  const newArray = new MyArray();
  console.log("newArray", newArray);

  console.log(`newArray.push("hi")`, newArray.push("hi"));
  console.log(`newArray.push("you")`, newArray.push("you"));
  console.log(`newArray.push("!")`, newArray.push("!"));
  console.log("newArray", newArray);

  console.log("newArray.pop()", newArray.pop());
  console.log("newArray.pop()", newArray.pop());
  console.log("newArray", newArray);

  console.log(`newArray.push("you")`, newArray.push("you"));
  console.log(`newArray.push("!")`, newArray.push("!"));
  console.log("newArray.delete(0)", newArray.delete(0));
  console.log("newArray", newArray);

  console.log(`newArray.push("are")`, newArray.push("are"));
  console.log(`newArray.push("nice")`, newArray.push("nice"));
  console.log("newArray.delete(1)", newArray.delete(1));
  console.log("newArray", newArray);

  console.log("newArray.get(0)", newArray.get(0));
  console.log("newArray.get(1)", newArray.get(1));
  console.log("newArray.get(2)", newArray.get(2));
}
