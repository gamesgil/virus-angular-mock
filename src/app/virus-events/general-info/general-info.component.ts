import { InfectionManagementService } from './../infection-management.service';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

/**
 * Infections general info component.
 */
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GeneralInfoComponent {
  user$ = this.adminService.getUserInfo(789);

  totalInfections = this.infectionManagementService.infections.length;

  constructor(private readonly adminService: AdminService,
              private readonly infectionManagementService: InfectionManagementService) {}
}
