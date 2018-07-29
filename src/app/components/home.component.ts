import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  title = 'app';

  @Input() inputValue: string = 'Test123';
}