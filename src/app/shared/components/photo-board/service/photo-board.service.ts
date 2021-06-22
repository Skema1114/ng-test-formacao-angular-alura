import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Photos } from '../interface/photos';

@Injectable()
export class PhotoBoardService {
  constructor(private httpClient: HttpClient) {}

  public getPhotos(): Observable<Photos> {
    return this.httpClient
      .get<Photos>(`${environment.SERVER_URL}/photos`)
      .pipe(
        map((photos) => {
          return photos.map((photo) => {
            return { ...photo, description: photo.description.toUpperCase() };
          });
        })
      )
      .pipe(delay(1000));
  }
}
