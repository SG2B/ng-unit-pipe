# unit-pipe  

> Unit conversion pipe for Angular based on math.js library

## Installation

1. Use npm to install the package

  ```terminal
  $ npm install ng-unit-pipe --save 
  ```

2. You must add into your module `imports` the `UnitPipeModule` in order to add the pipe.

  ```typescript
  import {UnitPipeModule} from 'ng-unit-pipe';
  
  @NgModule({
   // ...
   imports: [
     // ...
     UnitPipeModule
   ]
  })
  ```
  
Conversion are based on Math.js : http://mathjs.org/docs/expressions/parsing.html#eval
