import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import {ComponentsModule} from '../components/components.module';

import { PagesComponent } from './pages.component';
import { Graica1Component } from './graica1/graica1.component';
import { ProgressComponent } from './progress/progress.component';


import { DashboardComponent } from './dashboard/dashboard.component';




@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graica1Component,
    PagesComponent
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    Graica1Component,
    PagesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,
    ComponentsModule,
  ]
})
export class PagesModule { }
