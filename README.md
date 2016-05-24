# ng-cli-primeng
A seed project of ng-cli with primeng

You don't have to follow all these steps if you download this seed project. But please do try
npm install
npm i @angular/router-deprecated
<p>
Creating a ng-cli project with primeng from scratch <br>
Steps  (start cmd in administrator mode)<br>
•	Create a normal project anywhere using “ng new [project-name]” command in the cmd<br>
•	Navigate to newly created project folder using “cd [project-name]”<br>
•	Install priming and primeui using following commands<br>
      <t>o	npm install primeng --save<br>
      <t>o	npm install primeui –save<br>
•	We need to use deprecated router module in order to use priming components, so install router-deprecated module also using the following command
o	npm i @angular/router-deprecated
•	Import the project using intellij IDEA and open the angular-cli-build.js file and add the following lines to the vendorNpmFiles array
'primeng/**/*.js',
      'primeui/**/*.*'
o	The file will look like this after adding the lines
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

•	Open the system-config.ts in the src directory
o	Add 'primeng': 'vendor/primeng' to the const map: any
o	Add 'primeng': { defaultExtension: 'js' } to the packages 
o	Add '@angular/router-deprecated', to barrels

o	The file will look like this after adding those lines

/** Map relative paths to URLs. */
const map: any = {
  'primeng': 'vendor/primeng'
};

/** User packages configuration. */
const packages: any = {
  'primeng': { defaultExtension: 'js' }
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',
  '@angular/router-deprecated',



•	Open the index.html in the src directory
o	Add relevant stylesheet links and javascript link to the priming
 
Lines to add
•	<link rel="stylesheet" type="text/css" href="vendor/primeui/themes/omega/theme.css" />
•	<link rel="stylesheet" type="text/css" href="app/resources/icons/css/font-awesome.min.css" />
•	<link rel="stylesheet" type="text/css" href="vendor/primeui/primeui-ng-all.min.css" />

•	<script src="vendor/primeui/primeui-ng-all.min.js"></script>


Note: need to copy the font awesome resources to the app/resources folder. You can find them in the priming quick start seed project


Now you can use priming components

•	First need to import components in your component

import {InputText} from 'primeng/primeng';

•	Then include it in the directives array
directives: [InputText]
•	Then include in the html
<input type="text" pInputText/>

</p>
