import { Component } from '@angular/core';
import {InputText} from 'primeng/primeng';

@Component({
  moduleId: module.id,
  selector: 'ng-cli-test-app',
  templateUrl: 'ng-cli-test.component.html',
  styleUrls: ['ng-cli-test.component.css'],
  directives: [InputText]
})
export class NgCliTestAppComponent {
  title = 'ng-cli-test works!';
}
