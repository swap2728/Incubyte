# Incubyte - Library Management Project



My Porject files :
src/
  ├── controllers/
  │    ├── bookController.ts
  ├── models/
  │    ├── bookModel.ts
  │    ├── libraryModel.ts
  ├── routes/
  │    ├── bookRoutes.ts
  ├── index.ts
  ├── app.ts




Test Case Status : 

 1) test cases file status : 

 __tests_/
  ├── library.test.ts
 
 2) test case runned :
 PASS  __tests__/library.test.ts
  Library
    √ should add a book successfully (2 ms)                                                                                                                                       
    √ should throw an error when adding a duplicate book (9 ms)                                                                                                                   
    √ should borrow a book successfully                                                                                                                                           
    √ should throw an error when borrowing an unavailable book                                                                                                                    
    √ should return a borrowed book successfully                                                                                                                                  
    √ should throw an error when returning a book that was not borrowed                                                                                                           
    √ should throw an error when trying to borrow a non-existent book (1 ms)                                                                                                      
    √ should throw an error when trying to return a non-existent book                                                                                                             
    √ should list all available books after adding multiple books (1 ms)                                                                                                          
    √ should borrow multiple books successfully                                                                                                                                   
    √ should return one borrowed book while another remains borrowed (1 ms)                                                                                                       
                                                                                                                                                                                  
Test Suites: 1 passed, 1 total                                                                                                                                                    
Tests:       11 passed, 11 total                                                                                                                                                  
Snapshots:   0 total
Time:        2.51 s
Ran all test suites.