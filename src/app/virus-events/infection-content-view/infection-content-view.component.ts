import { InfectionData } from './../infection-content/infection-data.model';
import { Component, OnInit, Input } from '@angular/core';

/**
 * Infection content view component.
 */
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'infection-content-view',
  templateUrl: './infection-content-view.component.html',
  styleUrls: ['./infection-content-view.component.scss']
})
export class InfectionContentViewComponent {
  @Input()
  infectionData: InfectionData;
}
