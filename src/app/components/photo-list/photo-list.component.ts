import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

import { Photos } from 'src/app/shared/components/photo-board/interface/photos';
import { PhotoBoardService } from 'src/app/shared/components/photo-board/service/photo-board.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
})
export class PhotoListComponent implements OnInit {
  public photos$!: Observable<Photos>;
  public likes = 0;
  public fa = { faCircleNotch };

  constructor(private photoBoardService: PhotoBoardService) {}

  public ngOnInit(): void {
    this.photos$ = this.photoBoardService.getPhotos();
  }

  public like(): void {
    this.likes++;
  }
}
