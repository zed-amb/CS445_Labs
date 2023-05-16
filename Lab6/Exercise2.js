Array.prototype.removeDuplicatesAsync = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const newArr = [...new Set(this)];
      resolve(newArr);
    }, 0);
  });
};


console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync(); 
console.log(`end`);

// Output:
// start
// end
// [4, 1, 5, 7, 2, 3, 6]

/* const removeDuplicatesAsync = (array) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const newArr = [];
        for (let i = 0; i < array.length; i++) {
          if (!newArr.includes(array[i])) {
            newArr.push(array[i]);
          }
        }
        resolve(newArr);
      }, 0);
    });
  }
  

  console.log('start');
  let arr = [4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2]
removeDuplicatesAsync(arr)
  .then(newArr => {
    console.log('end');
    console.log(newArr);
    
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });
 */