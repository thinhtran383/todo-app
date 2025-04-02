import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginFormComponent} from './login-form/login-form.component';
import {SocialButtonComponent} from '../../component/social-button/social-button.component';
import {AuthService} from '../../service/auth.service';
import {Image} from 'primeng/image';
import {Router, RouterLink} from '@angular/router';
import {Toast} from 'primeng/toast';
import {Button} from 'primeng/button';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule, LoginFormComponent, SocialButtonComponent, Image, RouterLink, Toast],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private shouldNavigate = false;

  constructor(private authService: AuthService, private router: Router, private toastService: MessageService) {
  }

  // ngOnInit(): void {
  //      const token = localStorage.getItem('token');
  //      if(token) {
  //        this.router.navigate(['/']).then(() => {
  //          window.location.reload();
  //        });
  //      }
  // }

  submitForm(formData: any) {
    this.authService.login(formData).subscribe({
      next: (response) => {
        console.log('Login success', response);
        if (response.status === 200) {

          localStorage.setItem('token', JSON.stringify(response.body?.data));
          this.shouldNavigate = true;

          this.toastService.add({
            severity: 'success',
            summary: 'Notification',
            detail: 'Login successful',
            life: 1000
          });

        }
      },
      error: () => {
        this.toastService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Login failed, please check your account or password!',
          life: 1000
        });
      },
    });
  }

  navigate() {
    if(this.shouldNavigate) {
      this.router.navigate(['/app/today']).then(() => {
        window.location.reload();
      });
    }
  }


}
