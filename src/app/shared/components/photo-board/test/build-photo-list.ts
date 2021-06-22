import { Photos } from '../interface/photos';

export function buildPhotoList(): Photos {
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
