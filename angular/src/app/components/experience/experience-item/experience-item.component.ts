import { Component, Input, OnInit } from '@angular/core';
import { ExperienceData } from '../ExperienceData';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css']
})
export class ExperienceItemComponent implements OnInit {
  @Input() data: ExperienceData;

  constructor() { }

  ngOnInit(): void {
  }

}
