# ng-cli-primeng
A seed project of ng-cli with primeng

<snippet>
  <content>

## Installation
You don't have to follow all these steps if you download this seed project. But please do try<br>
npm install<br>
npm i @angular/router-deprecated<br>

## If you want to make your own ng-cli-primeng project from scratch
- Create a normal project anywhere using “ng new [project-name]” command in the cmd
- Navigate to newly created project folder using “cd [project-name]”
- Install priming and primeui using following commands<br>
    * npm install primeng --save<br>
    * npm install primeui –save<br>
- We need to use deprecated router module in order to use priming components, so install router-deprecated module also using the following command<br>
  * npm i @angular/router-deprecated<br>
- Import the project using intellij IDEA and open the angular-cli-build.js file and add the following lines to the vendorNpmFiles array, <br>


      ```'primeng/**/*.js', ```<br>
      ```'primeui/**/*.*'``` <br>
	The file will look like this after adding the lines <br>
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

- Open the system system-config.ts in the src directory<br>

 	-Add 'primeng': 'vendor/primeng' to the const map: any<br>
  	-Add 'primeng': { defaultExtension: 'js' } to the packages <br>
  	-Add '@angular/router-deprecated', to barrels<br><br>
  	
  	The file will look like this after adding those lines<br>
 

```sh
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


```

- Open the index.html in the src directory and add relevant stylesheet links and javascript link to the priming<br>

```sh
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>NgCliTest</title>
  <base href="/">
  <link rel="stylesheet" type="text/css" href="vendor/primeui/themes/omega/theme.css" />
  <link rel="stylesheet" type="text/css" href="app/resources/icons/css/font-awesome.min.css" />
  <link rel="stylesheet" type="text/css" href="vendor/primeui/primeui-ng-all.min.css" />
  {{#unless environment.production}}
  <script src="/ember-cli-live-reload.js" type="text/javascript"></script>
  {{/unless}}
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <ng-cli-test-app>Loading...</ng-cli-test-app>

  <script src="vendor/primeui/primeui-ng-all.min.js"></script>

    {{#each scripts.polyfills}}<script src="{{.}}"></script>{{/each}}
    <script>
      System.import('system-config.js').then(function () {
        System.import('main');
      }).catch(console.error.bind(console));
    </script>
</body>
</html>


```

Note: need to copy the font awesome resources to the app/resources folder. You can find them in the priming quick start seed project
<br>
Now you can use priming components<br>
-First need to import components in your component<br>
import {InputText} from 'primeng/primeng';<br>
-Then include it in the directives array<br>
directives: [InputText]<br>
-Then include in the html<br>
<input type="text" pInputText/><br>





</content>
</snippet>
