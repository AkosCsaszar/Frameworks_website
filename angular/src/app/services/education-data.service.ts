import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EducationData } from '../components/education/EducationData';

@Injectable({
  providedIn: 'root'
})
export class EducationDataService {
  private apiUrl = 'http://localhost:5000/education';

  constructor(private http:HttpClient) { }

  getData(): Observable<EducationData[]> {
    return this.http.get<EducationData[]>(this.apiUrl);
  }
}
