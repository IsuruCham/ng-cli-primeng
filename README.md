# ng-cli-primeng
A seed project of ng-cli with primeng

You don't have to follow all these steps if you download this seed project. But please do try
npm install
npm i @angular/router-deprecated

Creating a ng-cli project with primeng from scratch <br>
Steps  (start cmd in administrator mode)<br>
•	Create a normal project anywhere using “ng new [project-name]” command in the cmd<br>
•	Navigate to newly created project folder using “cd [project-name]”<br>
•	Install priming and primeui using following commands<br>
      <t>o	npm install primeng --save<br>
      <t>o	npm install primeui –save<br>
•	We need to use deprecated router module in order to use priming components, so install router-deprecated module also using the following command<br>
o	npm i @angular/router-deprecated<br>
•	Import the project using intellij IDEA and open the angular-cli-build.js file and add the following lines to the vendorNpmFiles array<br>
'primeng/**/*.js',<br>
      'primeui/**/*.*'<br>
o	The file will look like this after adding the lines<br><br>
var Angular2App = require('angular-cli/lib/broccoli/angular2-app');<br>

module.exports = function(defaults) {<br>
  return new Angular2App(defaults, {<br>
    vendorNpmFiles: [<br>
      'systemjs/dist/system-polyfills.js',<br>
      'systemjs/dist/system.src.js',<br>
      'zone.js/dist/*.js',<br>
      'es6-shim/es6-shim.js',<br>
      'reflect-metadata/*.js',<br>
      'rxjs/**/*.js',<br>
      '@angular/**/*.js',<br>
      'primeng/**/*.js',<br>
      'primeui/**/*.*'<br>
    ]<br>
  });<br>
};<br>

•	Open the system-config.ts in the src directory<br>
o	Add 'primeng': 'vendor/primeng' to the const map: any<br>
o	Add 'primeng': { defaultExtension: 'js' } to the packages <br>
o	Add '@angular/router-deprecated', to barrels<br><br>

o	The file will look like this after adding those lines<br><br>

/** Map relative paths to URLs. */<br>
const map: any = {<br>
  'primeng': 'vendor/primeng'<br>
};<br><br>

/** User packages configuration. */<br>
const packages: any = {<br>
  'primeng': { defaultExtension: 'js' }<br>
};<br><br>

////////////////////////////////////////////////////////////////////////////////////////////////<br>
/***********************************************************************************************<br>
 * Everything underneath this line is managed by the CLI.<br>
 **********************************************************************************************/<br>
const barrels: string[] = [<br>
  // Angular specific barrels.<br>
  '@angular/core',<br>
  '@angular/common',<br>
  '@angular/compiler',<br>
  '@angular/http',<br>
  '@angular/router',<br>
  '@angular/platform-browser',<br>
  '@angular/platform-browser-dynamic',<br>
  '@angular/router-deprecated',<br><br><br>



•	Open the index.html in the src directory<br>
o	Add relevant stylesheet links and javascript link to the priming<br>
 
Lines to add<br><p>
•	"<link rel="stylesheet" type="text/css" href="vendor/primeui/themes/omega/theme.css" />"<br>
•	"<link rel="stylesheet" type="text/css" href="app/resources/icons/css/font-awesome.min.css" />"<br>
•	"<link rel="stylesheet" type="text/css" href="vendor/primeui/primeui-ng-all.min.css" />"<br><br><br>

•	"<script src="vendor/primeui/primeui-ng-all.min.js"></script>"<br>
</p>

Note: need to copy the font awesome resources to the app/resources folder. You can find them in the priming quick start seed project
<br><br>

Now you can use priming components<br>

•	First need to import components in your component<br>

import {InputText} from 'primeng/primeng';<br>

•	Then include it in the directives array<br>
directives: [InputText]<br>
•	Then include in the html<br>
<input type="text" pInputText/><br>

