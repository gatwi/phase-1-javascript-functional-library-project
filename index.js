let standardizeInput = function(collection) {
    return (collection instanceof Array) ? collection.slice() : Object.values(collection);
}

let myEach = function(collection, callback) {
    let newCollection = standardizeInput(collection);
    for (let idx = 0; idx < newCollection.length; idx++) {
        callback(newCollection[idx]);
    }
    return collection;
}

let MyMap = function(collection, callback) {
    let newCollection = standardizeInput(collection);
    let newArr = [];
    for (let idx = 0; idx < newCollection.length; idx++) {
        newArr.push(callback(newCollection[idx]));
    }
    return newArr;
}

let myReduce = function(collection, callback, acc) {
    let newCollection = standardizeInput(collection);
    if (!acc) {
        acc = newCollection[0];
        newCollection = newCollection.slice(1);
      }

      let len = newCollection.length;
      for (let i = 0; i < len; i++) {
        acc = callback(acc, newCollection[i], newCollection);
      }
      return acc;
    }

    let myFind = function(collection, predicate) {
        let newCollection = standardizeInput(collection);
      
        for (let idx = 0; idx < newCollection.length; idx++) {
          if (predicate(newCollection[idx])) return newCollection[idx];
        }
      
        return undefined;
      }

      let myFilter = function(collection, predicate) {
        let newCollection = standardizeInput(collection);
      
        let newArr = [];
      
        for (let idx = 0; idx < newCollection.length; idx++) {
          if (predicate(newCollection[idx])) newArr.push(newCollection[idx]);
        }
      
        return newArr;
      }
      
      let mySize = function(collection) {
        let newCollection = standardizeInput(collection);
        return newCollection.length;
      }