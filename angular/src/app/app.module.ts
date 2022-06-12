import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';



import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutmeItemComponent } from './components/aboutme/aboutme-item/aboutme-item.component';
import { EducationItemComponent } from './components/education/education-item/education-item.component';
import { ExperienceItemComponent } from './components/experience/experience-item/experience-item.component';
import { ProjectItemComponent } from './components/projects/project-item/project-item.component';

// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutmeComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectsComponent,
    AboutmeItemComponent,
    EducationItemComponent,
    ExperienceItemComponent,
    ProjectItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
