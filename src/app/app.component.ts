import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PhotoBoardService } from './shared/components/photo-board/service/photo-board.service';
import { Photos } from './shared/components/photo-board/interface/photos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = 'ng-test-formacao-angular-alura';
  public photos$!: Observable<Photos>;
  public likes = 0;

  constructor(private photoBoardService: PhotoBoardService) {}

  public ngOnInit(): void {
    this.photos$ = this.photoBoardService.getPhotos();
  }

  public like(): void {
    this.likes++;
  }
}
