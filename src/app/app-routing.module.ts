import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/Components/about/about.component';
import { ContactComponent } from 'src/Components/contact/contact.component';
import { CvComponent } from 'src/Components/cv/cv.component';
import { GalaryComponent } from 'src/Components/galary/galary.component';
import { HomeComponent } from 'src/Components/home/home.component';
import { NavbarComponent } from 'src/Components/navbar/navbar.component';
import { ProjectsComponent } from 'src/Components/projects/projects.component';
import { SkillsComponent } from 'src/Components/skills/skills.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {path:'',component:NavbarComponent,
  children:[
  { path: 'home', component: HomeComponent },
  {path:'about',component:AboutComponent},
  {path:'Galary',component:GalaryComponent},
  {path:'contact',component:ContactComponent},
  {path:'cv',component:CvComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'skills',component:SkillsComponent},
  ]
}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
