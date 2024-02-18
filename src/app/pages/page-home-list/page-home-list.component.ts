import { Component } from '@angular/core';
import { PageContainerComponent } from '../../components/page-conteiner/page-conteiner.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-home-list',
  standalone: true,
  imports: [
    PageContainerComponent,
    RouterLink,
  ],
  templateUrl: './page-home-list.component.html',
  styleUrl: './page-home-list.component.scss'
})
export class PageHomeListComponent {
  links = [
    { id: 'tables', label: 'Tables', route: 'tables' },
    { id: 'forms', label: 'Forms', route: 'forms' },
  ];
}
