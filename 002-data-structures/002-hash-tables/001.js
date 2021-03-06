/**
 * Hash Table
 */

{
  class HashTable {
    constructor(size) {
      this.data = new Array(size);
    }

    _hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i += 1) {
        hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      }
      return hash;
    }

    set(key, value) {
      let address = this._hash(key);
      if (!this.data[address]) {
        this.data[address] = [];
      }
      this.data[address].push([key, value]);
      return this.entries();
    }

    get(key) {
      let address = this._hash(key);
      const currentBucket = this.data[address];
      if (currentBucket) {
        for (let i = 0; i < currentBucket.length; i += 1) {
          if (currentBucket[i][0] === key) {
            return currentBucket[i][1];
          }
        }
      }
      return;
    }

    keys() {
      if (!this.data.length) {
        return undefined;
      }
      let result = [];
      for (let i = 0; i < this.data.length; i += 1) {
        if (this.data[i] && this.data[i].length) {
          if (this.data.length > 1) {
            for (let j = 0; j < this.data[i].length; j += 1) {
              result.push(this.data[i][j][0]);
            }
          } else {
            result.push(this.data[i][0]);
          }
        }
      }
      return result;
    }

    values() {
      return this.keys().map((key) => this.get(key));
    }

    entries() {
      return this.keys().map((key) => ({
        key,
        value: this.get(key),
      }));
    }
  }

  const myHashTable = new HashTable(50);

  console.log(
    `myHashTable.set("grapes", 10000):`,
    myHashTable.set("grapes", 10000),
  );
  console.log(`myHashTable.set("apples", 54):`, myHashTable.set("apples", 54));
  console.log(
    `myHashTable.set("oranges", 21):`,
    myHashTable.set("oranges", 21),
  );

  console.log(`myHashTable.get("grapes"):`, myHashTable.get("grapes"));
  console.log(`myHashTable.get("apples"):`, myHashTable.get("apples"));
  console.log(`myHashTable.get("oranges"):`, myHashTable.get("oranges"));

  console.log(`myHashTable.keys():`, myHashTable.keys());
  console.log(`myHashTable.values():`, myHashTable.values());
  console.log(`myHashTable.entries():`, myHashTable.entries());
}
