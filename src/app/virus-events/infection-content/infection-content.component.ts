import { InfectionData } from './infection-data.model';
import { Component, Input } from '@angular/core';
import { InfectionManagementService } from '../infection-management.service';

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
  selectedInfection$ = this.infectionManagementService.selectedInfection$;
  
  constructor(private readonly infectionManagementService: InfectionManagementService) {}
}
