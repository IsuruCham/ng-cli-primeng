# ng-cli-primeng
A seed project of ng-cli with primeng

<snippet>
  <content>

## Installation
You don't have to follow all these steps if you download this seed project. But please do try<br>
npm install<br>
npm i @angular/router-deprecated<br>

## If you want to make your own ng-cli-primeng project from scratch
1. Create a normal project anywhere using “ng new [project-name]” command in the cmd
2. Navigate to newly created project folder using “cd [project-name]”
3. Install priming and primeui using following commands<br>
    * npm install primeng --save<br>
    * npm install primeui –save<br>
4. We need to use deprecated router module in order to use priming components, so install router-deprecated module also using the following command<br>
  * npm i @angular/router-deprecated<br>
5. Import the project using intellij IDEA and open the angular-cli-build.js file and add the following lines to the vendorNpmFiles array, <br>

      ```'primeng/**/*.js', ```<br>
      ```'primeui/**/*.*'``` <br>
o	The file will look like this after adding the lines <br>
```sh
var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
  return new Angular2App(defaults, {
    vendorNpmFiles: [
      'systemjs/dist/system-polyfills.js',
      'systemjs/dist/system.src.js',
      'zone.js/dist/*.js',
      'es6-shim/es6-shim.js',
      'reflect-metadata/*.js',
      'rxjs/**/*.js',
      '@angular/**/*.js',
      'primeng/**/*.js',
      'primeui/**/*.*'
    ]
  });
};

```

6.	Open the system-config.ts in the src directory<br>
  o	Add 'primeng': 'vendor/primeng' to the const map: any<br>
  o	Add 'primeng': { defaultExtension: 'js' } to the packages <br>
  o	Add '@angular/router-deprecated', to barrels<br><br>

The file will look like this after adding those lines<br>





</content>
</snippet>
