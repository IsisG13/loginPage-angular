import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DefaultLoginLayoutComponent } from './default-login-layout/default-login-layout/default-login-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { PrimaryInputComponent } from './components/primary-input/primary-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    DefaultLoginLayoutComponent, 
    LoginComponent, 
    PrimaryInputComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '';
}
