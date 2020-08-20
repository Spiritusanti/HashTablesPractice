//What are Hash Tables?
// The most similar example I am familar with is Python libraries. We are created key/value pairs that allow us to insert, lookup, delete, and search in constant time (O(1)).

// However, adding or retrieving properties using a hash function can add a lot of time complexity.

// Hash Functions are pure functions that are indempotent and only allow one way conversions. Input --> Hash value (unique key) ! Hash value --> input. SImilar to what we used to store passwords in the Smart Brain project in the 1st course.

// this all gets placed somewhere in memory at different addresses.
// let user = {
//   age: 54,
//   name: 'Kylie',
//   magic: true,
//   scream: function() {
//     console.log('ahhhhhhh!');
//   }
// }

// // however, we can access the properties of user very fast. e.g.
// user.age //O(1)
// user.spell = 'abra kadabra'; //O(1)
// user.scream(); //O(1)


//so what are the problems with Hash tables?

//Hash functions can cause collisions. This happens because there is nothing telling the hash function to evenly distribute over the available memory. collisions are always going to happen in hash tables when a certain data density is reached creating linked lists (future learning). This results in O(n) time complexity.


// with new versions of JavaScript we now have additional options for keys. Previously the default behavior was the stringify all keys:

// Map()
// const a = new Map()
//Map maintains order of insertion. It also allows us to use any datatype as a key (i.e. functions)



// sets
// const b = new Sets()
// similar to Map but only stores the keys and not the values



// implement a hash table exercise:
// the challenge is to create a set method and then a get method to retrieve data.

// class HashTable {
//   constructor(size){
//     this.data = new Array(size);
//   }

//   _hash(key) {
//     let hash = 0;
//     for (let i =0; i < key.length; i++){
//         hash = (hash + key.charCodeAt(i) * i) % this.data.length
//     }
//     return hash;
//   }
// }

// const myHashTable = new HashTable(50);
// myHashTable.set('grapes', 10000)
// myHashTable.get('grapes')
// myHashTable.set('apples', 9)
// myHashTable.get('apples')

//my brain is fried this week so we're gonna be lazy and go through the solution video instead.

class HashTable {
  constructor(size){
    this.data = new Array(size);
  }
  //generates our hash value
  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  } //O(1)
  //lets us add data to the table
  set(key, value) {
    let address = this._hash(key)
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value])
    return this.data
  } //O(1)
  //looks up data from the table given a key as input
  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for( let i = 0; i < currentBucket.length; i++)
      {
        if(currentBucket[i][0] === key) {
          return currentBucket[i][1]
        }
      }
    }
    return undefined
  } //O(1) most of the time assuming no collisions. Can become O(n)
  // return an array of keys
  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0])
      }
    }
    return keysArray;
  } //O(n)
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.get('grapes');
myHashTable.set('apples', 9);
myHashTable.get('apples');
myHashTable.keys();

// hash tables vs Arrays:
// hash tables are O(1) for search vs O(n) for Arrays
// for inserts HT's are O(1) vs O(n) for Arrays
// lookup is equivalent at O(1)
// HT's have no inherent order while Arrays do!

