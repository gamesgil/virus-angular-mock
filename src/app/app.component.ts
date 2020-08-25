import { InfectionData } from './virus-events/infection-content/infection-data.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dummyData: InfectionData = {coordinate: {lon: 1, lat: 2}, date: new Date()};
}
