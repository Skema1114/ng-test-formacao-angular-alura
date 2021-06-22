import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Photos } from '../interface/photos';
import { buildPhotoList } from '../test/build-photo-list';
import { PhotoBoardService } from './photo-board.service';

@Injectable()
export class PhotoBoardMockService extends PhotoBoardService {
  public getPhotos(): Observable<Photos> {
    return of(buildPhotoList());
  }
}
