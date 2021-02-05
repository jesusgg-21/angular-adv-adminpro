import { Component, Input } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent  {

  // Doughnut
  
  @Input('title') chartTitulo:string = "sin titulo";
  @Input('label') chartLabels:Label[] = ['x','y','z'];
  @Input('data') chartData: MultiDataSet = [
    [350, 450, 100]
  ];

  public colors: Color[] = [
    {
      backgroundColor: ['#398bf7', '#26c6da', '#424a56']
    }
  ]

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
