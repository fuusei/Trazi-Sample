## MODIFICATIONS TO DATA

Changed all data to be lower case and have no spaces, dashes are still valid
Eases querying
Ex: Balance of Matanuska-Susitna Borough,Alaska,93069 ---> balanceofmatanuska-susitnaborough,alaska,93069

## ASSUMPTIONS

A PUT request must be a valid state, but the city can be created

Ex:
PUT(fakeState, newCity) ---> ERR
PUT(validState, newCity) ---> New Entry Created.

## FILE STRUCTURE

Have routes and controllers folders which would lend well for scaling, but are a bit extra for this case

## THIRD PARTY MODULES

Express - neater routing
CSV - for easy parsing of csv data

## CLOSING STATEMENTS

Thank you for the opportunity and have a nice day!