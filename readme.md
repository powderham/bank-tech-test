# Refactor ideas
- make balance only stored in one location (transactions) and change balance on account class to a function that iterates and sums all changes to balance
- make a class to return a line to be printed from transaction info
- make a class to print the statement

## Specification

### Requirements

* You should be able to interact with the your code via IRB.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012
**And** a deposit of 2000 on 13-01-2012
**And** a withdrawal of 500 on 14-01-2012
**When** she prints her bank statement
**Then** she would see

```
date       || credit || debit   || balance
14/01/2012 ||        || 500.00  || 2500.00
13/01/2012 || 2000.00||         || 3000.00
10/01/2012 || 1000.00||         || 1000.00
```

-------------

### User Stories

```
As a user,
So I know how much money I have,
I need to see my current balance
```

```
As a user,
So I can save my money,
I need to be able to deposit my money in to my account
```

```
As a user,
So I can use my money,
I need to be able to withdraw my money from my account
```

```
As a user,
So I can have a record of my transactions,
I need to be able to print a history of my current account with the date
```
