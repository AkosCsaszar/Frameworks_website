import { Component, OnInit } from '@angular/core';
import { AboutmeDataService } from 'src/app/services/aboutme-data.service';
import { AboutMeData } from './AboutMeData';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  alldata: AboutMeData[] = [];

  constructor(private aboutmeDataService: AboutmeDataService) { }

  ngOnInit(): void {
    this.aboutmeDataService.getData().subscribe((alldata) => (this.alldata = alldata));
  }

}
