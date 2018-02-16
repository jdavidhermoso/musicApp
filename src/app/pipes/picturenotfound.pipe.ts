import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'picturenotfound'
})
export class PicturenotfoundPipe implements PipeTransform {

  transform(value: any[], args?: any): any {
    let picturePath = 'assets/images/nopicture.jpeg';

    if (value && value.length) {
      picturePath = value[1].url;
    }

    return picturePath;
  }

}
