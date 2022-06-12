import { Component, OnInit } from '@angular/core';
import { ExperienceDataService } from 'src/app/services/experience-data.service';
import { ExperienceData } from './ExperienceData';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  alldata: ExperienceData[] = [];

  constructor(private experienceDataService: ExperienceDataService) { }

  ngOnInit(): void {
    this.experienceDataService.getData().subscribe((alldata) => (this.alldata = alldata));
  }

}
