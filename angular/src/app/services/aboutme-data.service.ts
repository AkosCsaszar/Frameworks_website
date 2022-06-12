import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AboutMeData } from '../components/aboutme/AboutMeData';

@Injectable({
  providedIn: 'root'
})
export class AboutmeDataService {
  private apiUrl = 'http://localhost:5000/aboutmeData';

  constructor(private http:HttpClient) { }

  getData(): Observable<AboutMeData[]> {
    return this.http.get<AboutMeData[]>(this.apiUrl);
  }
}
