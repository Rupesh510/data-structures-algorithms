/**
 * Monarchy Interface Design
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

class Person {
  constructor(name) {
    this.name = name;
    this.isAlive = true;
    this.children = [];
  }
}

class Monarchy {
  constructor(king) {
    this.king = new Person(king);
    this._persons = {
      [this.king.name]: this.king,
    };
  }

  birth(childName, parentName) {
    const parent = this._persons[parentName];
    const newChild = new Person(childName);

    parent.children.push(newChild);
    this._persons[childName] = newChild;
  }

  death(name) {
    const person = this._persons[name];

    if (person === undefined) {
      return null;
    }

    person.isAlive = false;
  }

  _depthFirstSearch(currentPerson, order) {
    if (currentPerson.isAlive) {
      order.push(currentPerson.name);
    }

    for (let i = 0; i < currentPerson.children.length; i += 1) {
      this._depthFirstSearch(currentPerson.children[i], order);
    }
  }

  getOrderOfSuccession() {
    const order = [];
    this._depthFirstSearch(this.king, order);
    return order;
  }
}

const monarch = new Monarchy("Jake");

monarch.birth("Catherine", "Jake");
monarch.birth("Tom", "Jake");
monarch.birth("Celine", "Jake");
monarch.birth("Peter", "Celine");
monarch.birth("Jane", "Catherine");
monarch.birth("Farah", "Jane");
monarch.birth("Mark", "Catherine");

console.log(monarch.getOrderOfSuccession());
/* ["Jake", "Catherine", "Jane", "Farah", "Mark", "Tom", "Celine", "Peter"] */

monarch.death("Jake");
monarch.death("Jane");
/* ["Catherine", "Farah", "Mark", "Tom", "Celine", "Peter"] */

console.log(monarch.getOrderOfSuccession());
