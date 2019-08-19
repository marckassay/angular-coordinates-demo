import { Component } from '@angular/core';
import { Direction } from 'projects/angular-coordinates/src/lib/direction.enum';
import { TransformationType } from 'projects/angular-coordinates/src/lib/transformation-type.enum';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <h1>
        {{title}}
      </h1>
      -81.378841, 28.575749
      <br/>
      <geo-coordinates [value]="value2" [direction]="direction2"></geo-coordinates>
      &nbsp;
      <geo-coordinates [value]="value1" [direction]="direction1"></geo-coordinates>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'Angular-Cooridnates Demo';
  value1: string | number | null;
  value2: string | number | null;
  direction1: Direction;
  direction2: Direction;
  type: TransformationType;

  constructor() {
    this.direction1 = Direction.Longitude;
    this.value1 = `-81.378841`;

    this.direction2 = Direction.Latitude;
    this.value2 = `28.575749`;
  }
}
