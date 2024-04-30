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
12. 
    A. student.name

    B. student['Grad Year']

    C. student.greeting()

    D. student['Favorite Teacher'].name
    
    E. student.courseLoad[0]
    
13.
    Arithmetic
    
    A. '3' + 2
    
       '32'
   
       2 is implicitly converted to a string, and then it's concatenated with the string '3'. The result of this operation is the string '32'.
    
    B. '3'- 2
    
       1
    
       '3' is coerced to a number due to the minus during the arithmetic operation.
    
    C. 3 + null

    3
  
    evaluates to 3 because null is treated as 0.
  
    D. '3' + null

 
       '3null'

       concatenating a string with null coerces null into the string 'null', resulting in the string '3null'.

    E. true + 3
  
       4
 
       implicitly converts true to the number 1, resulting in 1 + 3 which evaluates to 4.
 
    F. false + null
 
       0
  
       both false and null are converted to their numeric equivalents (0), and 0 + 0 equals 0.
 
    G. '3' + undefined
 
       '3undefined'

       concatenating a string with undefined results in the string representation of '3undefined'.
  
    H. '3' - undefined

       NaN

       evaluates to NaN because attempting arithmetic operations on a string and undefined value results in a not-a-number value in JavaScript.

14. Comparison

    A. '2' > 1
 
    true
 
    the string is converted into a number, resulting in 2 being greater than 1, thus the expression '2' > 1 evaluates to true.
 
    B. '2'< '12'
  
    false
  
    the comparison is between the first characters of each string, which are '2' and '1'. The character '1' has a smaller value than '2', so '2' < '12' evaluates to false.

     C. 2== '2'
  
    true
  
    returns true because JavaScript performs type coercion, converting the string '2' to a number to check for equality.
  
    D. 2 === '2'

    false

    false because strict equality (===) compares both value and type, and 2 is a number while '2' is a string.

     E. true == 2
    
    false
    
    false because the abstract equality comparison coerces the boolean true to a number, resulting in 1, which is not equal to 2.
  
    F. true === Boolean(2)
 
    true
 
    true because Boolean(2) evaluates to true in JavaScript.

18. The == operator in JavaScript is the equality operator, which performs type coercion before comparing two values, while the === operator is the strict equality operator, which compares both value and type without type coercion. 
