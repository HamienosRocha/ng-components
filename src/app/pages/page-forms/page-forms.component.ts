import { Component } from '@angular/core';
import { PageContainerComponent } from "../../components/page-conteiner/page-conteiner.component";
import { DefaultFormComponent } from "../../components/default-form/default-form.component";

@Component({
  selector: 'app-page-forms',
  standalone: true,
  templateUrl: './page-forms.component.html',
  styleUrl: './page-forms.component.scss',
  imports: [PageContainerComponent, DefaultFormComponent]
})
export class PageFormsComponent {

}
