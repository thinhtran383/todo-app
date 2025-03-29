import { Component } from '@angular/core';
import {Password} from 'primeng/password';
import {IftaLabel} from 'primeng/iftalabel';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-text-field',
  imports: [
    Password,
    FormsModule
  ],
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.css'
})
export class TextFieldComponent {

}
