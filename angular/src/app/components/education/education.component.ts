import { Component, OnInit } from '@angular/core';
import { EducationDataService } from 'src/app/services/education-data.service';
import { EducationData } from './EducationData';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: [
    './education.component.css'
  ]
})
export class EducationComponent implements OnInit {

  alldata: EducationData[] = [];

  constructor(private educationDataService: EducationDataService) { }

  ngOnInit(): void {
    this.educationDataService.getData().subscribe((alldata) => (this.alldata = alldata));
  }

}
