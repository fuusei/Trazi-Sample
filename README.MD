## MODIFICATIONS TO DATA
Changed all data to be lower case and have no spaces
Eases querying
Ex: Saltaire village,New York,110 ---> saltairevillage,newyork,110

## ASSUMPTIONS
A PUT request must be a valid state, but the city can be created

Ex: 
PUT(fakeState, newCity) ---> ERR
PUT(validState, newCity) ---> New Entry Created.