import {Component} from '@angular/core';
import {SocialButtonComponent} from '../../component/social-button/social-button.component';
import {HeaderComponent} from '../../layout/header/header.component';
import {NgIf, NgOptimizedImage} from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {Account} from '../../model/account.type';
import {TextFieldComponent} from '../../component/text-field/text-field.component';
import {Password} from 'primeng/password';
import {IftaLabel} from 'primeng/iftalabel';
import {StyleClass} from 'primeng/styleclass';
import {InputText} from 'primeng/inputtext';
import {LoginFormComponent} from './login-form/login-form.component';

@Component({
  selector: 'app-login',
  imports: [FormsModule, Password, IftaLabel, InputText, ReactiveFormsModule, LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {


  submitForm(fromData: any) {
    console.log(fromData);
  }
}
