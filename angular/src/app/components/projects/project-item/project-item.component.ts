import { Component, Input, OnInit } from '@angular/core';
import { ProjectsData } from '../ProjectsData';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {
  @Input() data: ProjectsData;

  constructor() { }

  ngOnInit(): void {
  }

}
