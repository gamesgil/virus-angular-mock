import { AdminService } from 'src/app/admin.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzListModule } from 'ng-zorro-antd/list';
import { PotentialInfectionsComponent } from './potential-infections/potential-infections.component';
import { InfectionContentComponent } from './infection-content/infection-content.component';
import { InfectionManagementService } from './infection-management.service';
import { InfectionContentViewComponent } from './infection-content-view/infection-content-view.component';
import { MockServerInterceptor } from './mock-server.interceptor';
import { GeneralInfoViewComponent } from './general-info-view/general-info-view.component';


@NgModule({
  declarations: [
    GeneralInfoComponent,
    PotentialInfectionsComponent,
    InfectionContentComponent,
    InfectionContentViewComponent,
    GeneralInfoViewComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NzGridModule,
    NzListModule
  ],
  exports: [GeneralInfoComponent,
    PotentialInfectionsComponent,
    InfectionContentComponent,
    InfectionContentViewComponent
  ],
  providers: [
    InfectionManagementService, 
    { provide: HTTP_INTERCEPTORS, useClass: MockServerInterceptor, multi: true }
  ]
})
export class VirusEventsModule {
  constructor(
    private readonly infectionManagementService: InfectionManagementService,
    private readonly adminService: AdminService) {
      this.adminService.getUserInfo().subscribe(
        user => this.infectionManagementService.loadData(user.id)
      );
  }
 }
