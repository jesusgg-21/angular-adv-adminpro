import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {Graica1Component} from './pages/graica1/graica1.component';
import {NopagefoundComponent} from './pages/nopagefound/nopagefound.component';
import {ProgressComponent} from './pages/progress/progress.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children:[
      {path: 'dashboard', component: DashboardComponent},
      {path: 'progress', component: ProgressComponent},
      {path: 'graica1', component: Graica1Component},
      {path: '', redirectTo: '/dashboard', pathMatch:'full'},
    ]
  },
  
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  
  //
  {path: '**', component: NopagefoundComponent},
];

@NgModule({
  declarations: [],
  imports: [ 
    RouterModule.forRoot( routes),
   ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
