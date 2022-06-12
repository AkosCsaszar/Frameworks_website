import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectsData } from '../components/projects/ProjectsData';

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {
  private apiUrl = 'http://localhost:5000/projects';

  constructor(private http:HttpClient) { }

  getData(): Observable<ProjectsData[]> {
    return this.http.get<ProjectsData[]>(this.apiUrl);
  }
}
