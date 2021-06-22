import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

import { Photos } from './interface/photos';

@Component({
  selector: 'app-photo-board',
  templateUrl: './photo-board.component.html',
  styleUrls: ['./photo-board.component.scss'],
})
export class PhotoBoardComponent implements OnInit, OnChanges {
  @Input() public photos!: Photos | null;
  public rows: any[][] = [];

  constructor() {}

  public ngOnInit(): void {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.photos) {
      this.rows = this.groupColumns(changes.photos.currentValue);
    }
  }

  private groupColumns(photos: Photos): any[][] {
    const newRows = [];
    const step = 4;

    for (let index = 0; index < photos?.length; index += step) {
      newRows.push(photos.slice(index, index + step));
    }

    return newRows;
  }
}
