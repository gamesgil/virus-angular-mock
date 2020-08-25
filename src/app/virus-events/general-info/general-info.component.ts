import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

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
  /**
   * User name.
   */
  @Input()
  username = 'n/a';

  /**
   * Num of potential infections.
   */
  @Input()
  potentialInfections = 0;
}
