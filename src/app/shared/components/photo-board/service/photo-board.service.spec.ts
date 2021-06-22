import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { PhotoBoardService } from './photo-board.service';
import { environment } from 'src/environments/environment';

describe(PhotoBoardService.name, () => {
  let photoBoardService: PhotoBoardService;
  let httpController: HttpTestingController;
  let nameGetPhotos = PhotoBoardService.prototype.getPhotos.name;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [PhotoBoardService],
      imports: [HttpClientTestingModule],
    });

    photoBoardService = TestBed.inject(PhotoBoardService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it(`${nameGetPhotos} should return photos with description in uppercase;`, (done) => {
    photoBoardService.getPhotos().subscribe((photos) => {
      expect(photos[0].description).toBe('EXAMPLE 01');
      expect(photos[1].description).toBe('EXAMPLE 02');
      done();
    });

    httpController.expectOne(mockData.api).flush(mockData.data);
  });

  afterEach(() => httpController.verify());
});

const mockData = {
  api: `${environment.SERVER_URL}/photos`,
  data: [
    {
      id: 1,
      description: 'example 01',
      src: '',
    },
    {
      id: 2,
      description: 'example 02',
      src: '',
    },
  ],
};
