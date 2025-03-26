import { Component } from '@angular/core';
import { SocialButtonComponent } from '../../compoents/social-button/social-button.component';

@Component({
  selector: 'app-login',
  imports: [SocialButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  onGoogleLogin() {
    console.log('Click');
  }
}
