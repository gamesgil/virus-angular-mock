import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzListModule } from 'ng-zorro-antd/list';
import { PotentialInfectionsComponent } from './potential-infections/potential-infections.component';
import { InfectionContentComponent } from './infection-content/infection-content.component';
import { InfectionManagementService } from './infection-management.service';
import { InfectionContentViewComponent } from './infection-content-view/infection-content-view.component';



@NgModule({
  declarations: [
    GeneralInfoComponent,
    PotentialInfectionsComponent,
    InfectionContentComponent,
    InfectionContentViewComponent
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
  providers: [InfectionManagementService]
})
export class VirusEventsModule { }
