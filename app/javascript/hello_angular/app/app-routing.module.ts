import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProjectComponent } from './pages/project/project.component';
// import { SecondaryComponent } from './components/secondary/secondary.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'project', component: ProjectComponent }
  // { path: 'secondary', component: SecondaryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }