function productOfArrayElements(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
      product *= arr[i];
    }
    return product;
  }

console.log(productOfArrayElements([1, 2, 3, 4, 5])); 
console.log(productOfArrayElements([1, 6, 3])); 
  