import { Component, Input, OnInit } from '@angular/core';
import { EducationData } from '../EducationData';

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.css']
})
export class EducationItemComponent implements OnInit {
  @Input() data: EducationData;

  constructor() { }

  ngOnInit(): void {
  }

}
