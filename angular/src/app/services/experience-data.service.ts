import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExperienceData } from '../components/experience/ExperienceData';


@Injectable({
  providedIn: 'root'
})
export class ExperienceDataService {
  private apiUrl = 'http://localhost:5000/experience';

  constructor(private http:HttpClient) { }

  getData(): Observable<ExperienceData[]> {
    return this.http.get<ExperienceData[]>(this.apiUrl);
  }
}
