import { Component, Input } from '@angular/core';
import { User } from '../../shared/user.model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'general-info-view',
  templateUrl: './general-info-view.component.html',
  styleUrls: ['./general-info-view.component.scss']
})
export class GeneralInfoViewComponent {
  /**
   * User name.
   */
  @Input()
  user: User;

  /**
   * Num of potential infections.
   */
  @Input()
  potentialInfections = 0;
}
