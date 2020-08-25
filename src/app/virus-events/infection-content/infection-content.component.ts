import { InfectionData } from './infection-data.model';
import { Component, Input } from '@angular/core';

/**
 * Infection data component.
 */
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'infection-content',
  templateUrl: './infection-content.component.html',
  styleUrls: ['./infection-content.component.scss']
})
export class InfectionContentComponent {
  /**
   * Infection data.
   */
  @Input()
  infectionData: InfectionData;
}
