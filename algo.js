
           // ALGO TASK ONE
function findProduct(input) {
    let product = 1,
        result = [];

    for(let i = 0; i < input.length; i++) {
        for(let j = 0; j < input.length; j++) {
            if(input[i] !== input[j]) {
                product *= input[j];
            }
            // console.log(input)
        }
        // console.log(product)

        result.push(product);
        // console.log(output)
        product = 1;
       }
       // console.log(output)

    return result;
}
console.log(findProduct([1,2,3,4]))
console.log(findProduct([0,1,2,3,4]))



         // ALGO TASK TWO 

function merge(array1,array2){
  let arr = array1.concat(array2);
  // console.log(arr)
  let results= arr.sort((a,b)=>a-b);
  // console.log(results)
 return results;
}
console.log(merge([1, 2, 4, 5, 10, 6, 3],[0, 8, 19, 90, 11, 16, 13]))



