import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-angularcommon',
  standalone: true,
  imports: [
    CommonModule
  ],
  template: `
    <p>
      angular-common works!
    </p>
  `,
  styles: ``
})
export class angularcommonComponent {

}
