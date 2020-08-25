import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzListModule } from 'ng-zorro-antd/list';
import { PotentialInfectionsComponent } from './potential-infections/potential-infections.component';
import { InfectionContentComponent } from './infection-content/infection-content.component';;



@NgModule({
  declarations: [
    GeneralInfoComponent,
    PotentialInfectionsComponent,
    InfectionContentComponent
  ],
  imports: [
    CommonModule,
    NzGridModule,
    NzListModule
  ],
  exports: [GeneralInfoComponent,
    PotentialInfectionsComponent,
    InfectionContentComponent
  ]
})
export class VirusEventsModule { }
