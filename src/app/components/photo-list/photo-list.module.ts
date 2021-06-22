import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PhotoListComponent } from './photo-list.component';
import { PhotoBoardModule } from 'src/app/shared/components/photo-board/photo-board.module';
import { LikeWidgetModule } from 'src/app/shared/components/like-widget/like-widget.module';

@NgModule({
  declarations: [PhotoListComponent],
  imports: [
    CommonModule,
    PhotoBoardModule,
    LikeWidgetModule,
    FontAwesomeModule,
  ],
  exports: [PhotoListComponent],
})
export class PhotoListModule {}
