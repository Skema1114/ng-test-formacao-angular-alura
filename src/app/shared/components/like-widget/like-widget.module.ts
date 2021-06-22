import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LikeWidgetComponent } from './like-widget.component';
import { ActionDirectiveModule } from '../../directives/action/action.directive.module';

@NgModule({
  declarations: [LikeWidgetComponent],
  imports: [CommonModule, FontAwesomeModule, ActionDirectiveModule],
  exports: [LikeWidgetComponent],
})
export class LikeWidgetModule {}
