import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from 'src/Components/home/home.component';
import { NavbarComponent } from 'src/Components/navbar/navbar.component';
import { AboutComponent } from 'src/Components/about/about.component';
import { GalaryComponent } from 'src/Components/galary/galary.component';
import { ContactComponent } from 'src/Components/contact/contact.component';
import { ProjectsComponent } from 'src/Components/projects/projects.component';
import { CvComponent } from 'src/Components/cv/cv.component';
import { SkillsComponent } from 'src/Components/skills/skills.component';
import { MatCardActions, MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    GalaryComponent,
    ContactComponent,
    ProjectsComponent,
    CvComponent,
    SkillsComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
