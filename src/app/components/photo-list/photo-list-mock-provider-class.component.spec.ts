import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoBoardMockService } from 'src/app/shared/components/photo-board/service/photo-board-mock.service';
import { PhotoBoardService } from 'src/app/shared/components/photo-board/service/photo-board.service';
import { PhotoListComponent } from './photo-list.component';
import { PhotoListModule } from './photo-list.module';

describe(`${PhotoListComponent.name}MockProviderClass`, () => {
  let fixture: ComponentFixture<PhotoListComponent>;
  let component: PhotoListComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoListModule, HttpClientModule],
      providers: [
        {
          provide: PhotoBoardService,
          useClass: PhotoBoardMockService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
  });

  it('Should create component (Mock provider class);', () => {
    expect(component).toBeTruthy();
  });

  it('(D) Should display board when data arrives (Mock provider class);', () => {
    fixture.detectChanges();
    const board = fixture.nativeElement.querySelector('app-photo-board');
    const loader = fixture.nativeElement.querySelector('.loader');

    expect(board).withContext('Should display board').not.toBeNull();
    expect(loader).withContext('Should not display loader').toBeNull();
  });
});
