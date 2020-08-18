//What are Hash Tables?
// The most similar example I am familar with is Python libraries. We are created key/value pairs that allow us to insert, lookup, delete, and search in constant time (O(1)).

// However, adding or retrieving properties using a hash function can add a lot of time complexity.

// Hash Functions are pure functions that are indempotent and only allow one way conversions. Input --> Hash value (unique key) ! Hash value --> input. SImilar to what we used to store passwords in the Smart Brain project in the 1st course.

// this all gets placed somewhere in memory at different addresses.
let user = {
  age: 54,
  name: 'Kylie',
  magic: true,
  scream: function() {
    console.log('ahhhhhhh!');
  }
}

// however, we can access the properties of user very fast. e.g.
user.age //O(1)
user.spell = 'abra kadabra'; //O(1)
user.scream(); //O(1)


//so what are the problems with Hash tables?

//Hash functions can cause collisions. This happens because there is nothing telling the hash function to evenly distribute over the available memory. collisions are always going to happen in hash tables when a certain data density is reached creating linked lists (future learning). This results in O(n) time complexity.


// with new versions of JavaScript we now have additional options for keys. Previously the default behavior was the stringify all keys:

// Map()
const a = new Map()
//Map maintains order of insertion. It also allows us to use any datatype as a key (i.e. functions)



// sets
const b = new Sets()
// similar to Map but only stores the keys and not the values



// 