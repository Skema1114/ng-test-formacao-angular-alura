import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Photos } from './interface/photos';
import { PhotoBoardComponent } from './photo-board.component';
import { PhotoBoardModule } from './photo-board.module';

describe(`${PhotoBoardComponent.name}Outro`, () => {
  let fixture: ComponentFixture<PhotoBoardTestComponent>;
  let component: PhotoBoardTestComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoBoardTestComponent],
      imports: [PhotoBoardModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoBoardTestComponent);
    component = fixture.componentInstance;
  });

  it(`Should display rows and columns when (@Input photos) has value (Gambiarra mode);`, () => {
    component.photos = buildPhotoList();
    fixture.detectChanges();

    expect(component.board.rows.length).withContext('Number of rows').toBe(2);
    expect(component.board.rows[0].length)
      .withContext('Number of columns from the first row')
      .toBe(4);
    expect(component.board.rows[1].length)
      .withContext('Number of columns from the second row')
      .toBe(4);
  });
});

function buildPhotoList(): Photos {
  const photos: Photos = [];

  for (let i = 0; i < 8; i++) {
    photos.push({
      id: i + 1,
      url: '',
      description: '',
    });
  }

  return photos;
}

@Component({
  template: `<app-photo-board [photos]="photos"></app-photo-board>`,
})
class PhotoBoardTestComponent {
  @ViewChild(PhotoBoardComponent) public board!: PhotoBoardComponent;
  public photos: Photos = [];
}
