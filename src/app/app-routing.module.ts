import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPComponent } from './first-p/first-p.component'
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{ path: '',   redirectTo: '/first-p', pathMatch: 'full' },
  { path: 'first-p', component: FirstPComponent },
  { path: 'home', component:HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
