console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40 
//    & console.log the variable
let partsNeeded = 40
console.log('1. Number of parts needed: ', partsNeeded);
// prints: 1. Number of parts needed: (then refrences the variable parts needed which is (currently) defined as 40)


// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
let supplyChanges = [ 3, 5, -6, 0, 7, 11 ];
console.log('2. Array of supply changes: ', supplyChanges);
// prints: 2. Array of supply changes: then prints the numeric values as a series of strings


// 3. Console log the value of the second item in the 'supplyChanges' array
console.log('3. Second supply change is: ', supplyChanges[1]);
//prints: 3. Second supply change is: (then calls the second value in the array supplyChanges which is 5)


// 4. The last item was added by mistake. Remove it from the 'supplyChanges' 
//    array & console.log the value removed.
let removedSupplies = supplyChanges.pop();
console.log('4. Removed item: ', removedSupplies);
// prints 4. Removed item: (then uses the value removedSupplies which is defined as supplyChanges.pop(); (pulling out the last value in the array))


// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
supplyChanges.push(25);
console.log('5. Adding 25 to supply changes ', supplyChanges[5]);
// prints 5. Adding 25 to supply changes ( then calls the supply changes in the 5th position which isnt defined and will be filled with 25 by the .push function)


// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.' 
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.' 
console.log('6. Showing supplyChanges...');
for (let x = 0; x < supplyChanges.length; x++) {
    if (x > 0)
        console.log('Added ', x, " parts" )
    if (x === 0)
        console.log('No Change')
    if (x < 0)
        console.log('Removed ', x, " parts" )
}
//goes through the array and talks through how it uses the numbers based on if they are greater than, equal to or less than 0




// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop. 
console.log('7. Showing supplyChanges with "for of" loop');

// 8. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.


console.log('8. Total supplies available is:');



// 9. We have a large stash of parts in our warehouse that we 
//    need to box up and get ready for shipment. 
//    There are 572 parts in total, and each box holds 7 parts.
//    Use a `while` loop to keep adding parts to boxes until
//    no more boxes can be filled.
//    Then log how many boxes were filled, and how many parts are left over.
console.log('9. Filling boxes with a "while" loop');