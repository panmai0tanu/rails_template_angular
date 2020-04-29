import { Component } from '@angular/core';
import templateString from './project.component.html'

@Component({
  selector: 'app-homepage',
  template: templateString
})
export class ProjectComponent {
  name = 'project+';
}