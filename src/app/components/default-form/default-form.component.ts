import { Component, Input, OnInit } from '@angular/core';
import { FormFields } from '../../models';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-default-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './default-form.component.html',
  styleUrl: './default-form.component.scss'
})
export class DefaultFormComponent implements OnInit {

  @Input({ required: true }) fields: FormFields<{ [key: string]: any; }> | null = null;

  ngOnInit(): void {
    console.log(this.fields);
  }
}
