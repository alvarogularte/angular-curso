import { Component } from '@angular/core';

import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-cli-libs-externas';

  list = _.map([1, 2, 3, 4, 5, 6], (n) => `# ${n}`);
}
