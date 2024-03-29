import { FormGroup } from "@angular/forms";

export interface FormFields<T> {
  form: FormGroup,
  formId: string,
  class?: string,
  fields: (
    InputField<T>
  )[],
}

export interface InputField<T> {
  type: 'input',
  required?: boolean,
  control: keyof T,
  label: string,
  class: string,
  input?: {
    placeholder?: string,
    onKeyUpFunction?: Function;
  },
}