import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'potential-infections',
  templateUrl: './potential-infections.component.html',
  styleUrls: ['./potential-infections.component.scss']
})
export class PotentialInfectionsComponent {
  @Input()
  data: Date[] = [new Date()];
}
