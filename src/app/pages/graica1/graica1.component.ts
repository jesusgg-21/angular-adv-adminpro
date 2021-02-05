import { Component } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './graica1.component.html',
  styleUrls: []
})
export class Graica1Component  {

  label1= ['label-1','label-2','label-3'];
  label2= ['label-1','label-2','label-3'];
  label3= ['label-1','label-2','label-3'];
  label4= ['label-1','label-2','label-3'];

  data1 = [300, 450, 90];
  data2 = [250, 320, 280];
  data3 = [410, 250, 333];
  data4 = [600, 150, 460];

}