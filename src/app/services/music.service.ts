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
      'Authorization': 'Bearer BQBjjCU1_FSENeiAZrrErbt8QmmSCrcS2EXfppANX-NFJUhszySq4csuWGtKJ_0j120tDGUa_V58up6nOho'
    });

    return this.http.get(url, {headers}).map((res: any) => {
      this.artists = res.artists.items;

      return this.artists;
    });
  }
}
