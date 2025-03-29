import {Component, EventEmitter, output, Output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {IftaLabel} from 'primeng/iftalabel';
import {Password} from 'primeng/password';
import {InputText} from 'primeng/inputtext';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  imports: [
    ReactiveFormsModule,
    IftaLabel,
    Password,
    InputText,
    NgClass
  ],
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  loginForm: FormGroup;

  // @Output() formSubmitted = new EventEmitter<FormGroup>();

  formSubmitted = output<FormGroup>()

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  submitForm() {
    if (this.loginForm.valid) {
      this.formSubmitted.emit(this.loginForm.value);
    } else {
      this.loginForm.markAllAsTouched();
      console.log('Form is invalid');
    }
  }
}
