const countingSort = (array, minimumValue, maximumValue) => {
    let z = 0;
    let count = [];
  
    // Adds each value starting from the minimumValue to the maximumValue
    // into the count array with a value of 0 
    for (let i = minimumValue; i <= maximumValue; i++) {
        count[i] = 0;
    }

    // Loop through the array and for each element in the count array with 
    // a key equal to array[i], we add 1 as the value
    for (let i = 0; i < array.length; i++) {
        count[array[i]] += 1;
    }
    
    // Loop from the minimumValue to the maximumValue
    // AND while the count[with key] (in between minValue and maxValue) - 1 is greater than 0
    // THEN replace the value at array[with index z] (z starts at 0), with the element at value i
    for (let i = minimumValue; i <= maximumValue; i++) {
        while (count[i]-- > 0) {
            array[z] = i;
            z++;
        }
    }
    return array;
}

const countingSort2 = (array, minimumValue, maximumValue) => {

    // Create a temp array with a length equal to max - min params, with placeholder values of 0
    const count = new Array(maximumValue - minimumValue + 1).fill(0);

    // Create a variable that returns the minimumValue as an absolute (positive) number
    const indexBalancer = Math.abs(minimumValue);
    const sortedArray = [];

    // We loop through the input array
    // For each number from the input array found in the count array, we increment its value by 1 in the count array
    // But this can't be achieved using negative numbers (array indexes can't be negative)
    // Therefore we use the indexBalancer to increase the indexes of all numbers so they are > -1
    // Here is an example: count[-3 + 5] --> count[2] = 1 (we have found 1 instance of the number -3 in the input array 
    // And placed it at index 2 in the count array)
    for (let number of array) {
        count[number + indexBalancer]++
    }

    // For each value in range, we get the tally for that value in the count array
    // This loop goes from smallest to greatest
    for (let i = minimumValue; i <= maximumValue; i++) {
        let tally = count[i + indexBalancer];

        // while the tally is > 0, push the element into the sortedArray and reduce the tally by 1 
        while(tally > 0) {
            sortedArray.push(i);
            tally--;
        }
    }
    return sortedArray;
};

console.log('First implementation: ', countingSort([3,4,5,2,1,1,0,-1], -1, 5))
console.log('Second implementation: ', countingSort2([3,4,5,2,1,1,0,-1,-5], -5, 5))