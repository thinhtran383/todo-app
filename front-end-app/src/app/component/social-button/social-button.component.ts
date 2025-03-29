import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-social-button',
  imports: [ButtonModule, CommonModule],
  templateUrl: './social-button.component.html',
  styleUrl: './social-button.component.css',
})
export class SocialButtonComponent {
  label = input<string>('Button');
  icon = input<string>('');
  onClick = output<void>();

  handleClick() {
    this.onClick.emit();
  }
}
