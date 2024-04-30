1. values added: 20
2. final result: 20
3. values added: 20
4. ReferenceError: result is not defined
    at sumValues (<anonymous>:14:33)
    at <anonymous>:17:1
    at mn (<anonymous>:16:5455)

    this is an error as a let declaration provides the variable with a block scope, and it cannot be accessed outside the block it is defined in. Here, it can't be used outside the if parenthesis. 
5. Cannot assign to "result" because it is a constant
    script.js? 4:8

    result is a constant declaration, so it throws an error when trying to change.
6. The code never reaches this line as theres an error with line 9. 
