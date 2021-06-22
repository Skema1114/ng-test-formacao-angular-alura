import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Photos } from '../interface/photos';

@Injectable()
export class PhotoBoardService {
  constructor(private httpClient: HttpClient) {}

  public getPhotos(): Observable<Photos> {
    return this.httpClient.get<Photos>(`${environment.SERVER_URL}/photos`);
  }
}
