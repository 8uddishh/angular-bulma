import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  title = 'app';
  selectedValue = '';
  @Input() inputValue: string = 'Test123';
  options: any[] = [
    { value: '1', text: 'Text 1'},
    { value: '2', text: 'Text 2'},
    { value: '3', text: 'Text 3'}
  ];

  constructor () {
  }
}