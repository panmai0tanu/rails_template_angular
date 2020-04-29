import { Component } from '@angular/core';
import templateString from './homepage.component.html'

@Component({
  selector: 'app-homepage',
  template: templateString
})
export class HomepageComponent {
  name = 'Homepage!';
}