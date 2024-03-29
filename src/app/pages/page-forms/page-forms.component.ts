import { Component, inject } from '@angular/core';
import { PageContainerComponent } from "../../components/page-conteiner/page-conteiner.component";
import { DefaultFormComponent } from "../../components/default-form/default-form.component";
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormFields } from '../../models';

@Component({
  selector: 'app-page-forms',
  standalone: true,
  templateUrl: './page-forms.component.html',
  styleUrl: './page-forms.component.scss',
  imports: [PageContainerComponent, DefaultFormComponent]
})
export class PageFormsComponent {

  private readonly formBuilder = inject(FormBuilder);

  personForm: FormGroup = this.formBuilder.group<FormPerson>({
    firstName: new FormControl('', { validators: Validators.required, nonNullable: true }),
    lastName: new FormControl('', { validators: Validators.required, nonNullable: true }),
  });

  personFields: FormFields<FormPerson> = {
    form: this.personForm,
    formId: 'personForm',
    fields: [
      {
        type: 'input',
        control: 'firstName',
        label: 'Firsrt Name',
        class: ''
      }
    ]
  };

}

interface FormPerson {
  firstName: AbstractControl;
  lastName: AbstractControl;
}
