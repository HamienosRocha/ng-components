import { Component } from '@angular/core';

@Component({
  selector: 'app-page-container',
  standalone: true,
  imports: [],
  styles: `
    :host {
      padding: 1rem 2rem
    }
  `,
  template: `
    <ng-content>

    </ng-content>
  `,
})
export class PageContainerComponent {

}
