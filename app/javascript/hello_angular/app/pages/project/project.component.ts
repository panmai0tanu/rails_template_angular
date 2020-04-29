import { Component, OnInit } from '@angular/core';
import templateString from './project.component.html'
import { ProjectService } from '../../services/project.service'

@Component({
  selector: 'app-homepage',
  template: templateString,
  providers: [ProjectService]
})
export class ProjectComponent implements OnInit {
  name = 'project+';
  projects: any[];

  constructor(private projectService: ProjectService) {

  }

  ngOnInit() {
  	this.loadProject()
  }

  loadProject() {
  	this.projectService.all()
  	.subscribe(resp => {
  		this.projects = resp;
  		console.log(resp)
  	}, (e) => {
  		console.log(e)
  	}
  	);
  }
}