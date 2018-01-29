import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MusicService {
  artists;

  constructor(public http: HttpClient) {
    console.log('Musc service Ready!');
  }

  getArtists(artist) {
    const url = `https://api.spotify.com/v1/search?query=${artist}&type=artist&market=US&offset=0&limit=20`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAH_HnIgIiTkyE1y2HEizi8E3eRVjGoamyE_SdDCn1NDB1JxTSsmUUUQ8fvTQSr7pdCRzTeQk7ItjEA_X8'
    });

    return this.http.get(url, {headers}).map((res: any) => {
      this.artists = res.artists.items;

      return this.artists;
    });
  }
}
