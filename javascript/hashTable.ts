import hash from "string-hash";

// Source: https://medium.com/free-code-camp/how-to-implement-a-simple-hash-table-in-javascript-cb3b9c1f2997

class HashMap {
  list = [];

  constructor() {
    this.list = [];
  }

  get(x) {
    let i = hash(x);

    if (!this.list[i]) return undefined;

    let result;

    this.list[i].forEach((pairs) => {
      if (pairs[0] === x) {
        result = pairs[1];
      }
    });

    return result;
  }
//
  set(x, y) {
    let i = hash(x);

    if (!this.list[i]) this.list[i] = [];

    this.list[i].push([x, y]);
  }
}

const myMap = new HashMap();

myMap.set("Joe", 26);
myMap.set("Joe", 1);
myMap.set("Jared", 5);
console.log(myMap.get("Joe"));
console.log(myMap.get('Jared'));
console.log(myMap.list);
