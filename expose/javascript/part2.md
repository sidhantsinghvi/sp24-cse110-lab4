1. 3
    console.log(i); will log 3 to the console, indicating that the loop ran for all 3 elements in the array. 
2. 150
    console.log(discountedPrice); will log 150 to the console, indicating that the last array value has a discounted price of 150.
3. 150
    console.log(finalPrice); will log 150 to the console, indicating that the last array value has a discounted and then rounded price of 150 to 2 decimal figures.
4. [ 50, 100, 150 ]
    this is returned as it is an array of the discounted prices in the order of the discountPrices array with the dicount value given. 
5. ReferenceError: i is not defined
    at discountPrices (<anonymous>:21:15)
    at <anonymous>:25:1
    at mn (<anonymous>:16:5455)

    i is declared using let within the loop, which means its scope is limited to that loop block. Therefore, attempting to access it outside of the loop will result in an error.
6. ReferenceError: discountedPrice is not defined
    at discountPrices (<anonymous>:21:15)
    at <anonymous>:25:1
    at mn (<anonymous>:16:5455)

    discountedPrice is declared using let within the loop, which means its scope is limited to that loop block. Therefore, attempting to access it outside of the loop will result in an error.
7. 150
    final price is declared in the same scope(block) as the console.io(finalPrice), so the value is returned as earlier when var was used.
8. [ 50, 100, 150 ]
    discounted is declared in the same scope(block) as the return function. So, it is accessible despite the let declaration.
9. ReferenceError: i is not defined
    at discountPrices (<anonymous>:20:15)
    at <anonymous>:24:1
    at mn (<anonymous>:16:5455)

     i is declared using let within the loop, which means its scope is limited to that loop block. Therefore, attempting to access it outside of the loop will result in an error.
10. 3
    returns length of prices, it is the same contant declared earlier, and not edited after.
11. [50, 100, 150]
    although constant, the data in a constant array can be modified. So, it returned the discounted values as earlier.
