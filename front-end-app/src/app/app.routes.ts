import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import("./page/landing/landing.component").then(m => m.LandingComponent),
    data: {title: 'Landing Page'}
  },
  {
    path: 'auth',
    data: {title: 'Authentication'},
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {
        path: 'login',
        loadComponent: () =>
          import('./page/login/login.component').then((m) => m.LoginComponent),
        data: {title: 'Login'}
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./page/register/register.component').then((m) => m.RegisterComponent),
        data: {title: 'Register'}
      },
      {
        path: 'forgot-password',
        loadComponent: () =>
          import('./page/forgot-password/forgot-password.component').then((m) => m.ForgotPasswordComponent),
        data: {title: 'Forgot Password'}
      },
    ]
  },
  {
    path: 'app',
    data: {title: "Today - Todoist"},
    children: [
      {path: '', redirectTo: 'today', pathMatch: 'full'},
      {
        path: 'today', loadComponent: () =>
          import('./page/dashboard/dashboard.component').then((m) => m.DashboardComponent),
        data: {title: 'Today'}
      },
    ]
  },
  {
    path: '**',
    loadComponent: () =>
      import('./page/not-found/not-found.component').then((m) => m.NotFoundComponent),
    data: {title: 'Page Not Found'}
  }
];
