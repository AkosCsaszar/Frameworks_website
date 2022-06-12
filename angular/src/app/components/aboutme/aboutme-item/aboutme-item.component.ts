import { Component, Input, OnInit } from '@angular/core';
import { AboutMeData } from '../AboutMeData';

@Component({
  selector: 'app-aboutme-item',
  templateUrl: './aboutme-item.component.html',
  styleUrls: ['./aboutme-item.component.css']
})
export class AboutmeItemComponent implements OnInit {
  @Input() data: AboutMeData;

  constructor() { }

  ngOnInit(): void {
  }

}
