import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class MusicService {

  constructor(public http: HttpClient) {
    console.log('Musc service Ready!');
  }

  getArtists() {
    const url = 'https://api.spotify.com/v1/search?query=simple+plan&type=artist&market=US&offset=0&limit=20';
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQABRRGP4dInnaOokfRGdQcTXLcxQTNayGToCX57POupC6rXtQQyVbnZnTL2f3bYGRzft4_b1Yo2toDCayM'
    });

    return this.http.get(url, {headers});
  }
}
