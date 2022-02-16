import { Component } from '@angular/core';
import { ClarityIcons, homeIcon } from '@cds/core/icon';

import '@cds/core/icon/register.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-cli';
  demoCollapsible = true;

  constructor() {
    ClarityIcons.addIcons(homeIcon);
  }
}
