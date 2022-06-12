import { Component, OnInit } from '@angular/core';
import { ProjectDataService } from 'src/app/services/project-data.service';
import { ProjectsData } from './ProjectsData';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  alldata: ProjectsData[] = [];

  constructor(private projectDataService: ProjectDataService) { }

  ngOnInit(): void {
    this.projectDataService.getData().subscribe((alldata) => (this.alldata = alldata));
  }

}
