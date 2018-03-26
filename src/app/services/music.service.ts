import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MusicService {
  apiBaseURL = 'https://api.spotify.com/v1/';
  clientID = '2db761b246784f38a6df096793471e9b';
  clientSecretID = 'cbf19157318b45cb921e71a933398d30';
  requestToken = '';

  constructor(public http: HttpClient) {
    console.log('Musc service Ready!');
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': 'Bearer BQA4GjHr-zpxKVzCIEjRe6d74VcQRvDRBwivj72hhRYkdsw2rOCQOwNhjUSXwmQZ3Loai5XrDAQBnNpgAzk'
    });
  }

  private buildAPIUrl(endPoint): string {
    return `${this.apiBaseURL}${endPoint}`;
  }

  getArtists(artist) {
    this.getRequestToken();

    const url = this.buildAPIUrl(`search?query=${artist}&type=artist&market=US&offset=0&limit=20`);
    return this.http.get(url, {headers: this.getHeaders()}).map((res: any) => {
      return res.artists.items;
    });
  }

  getRequestToken() {
    // TODO: Test in 'production'
    const url = 'https://accounts.spotify.com/api/token';
    this.http.post(url, {
      grant_type: 'client_credentials',
      client_id: '2db761b246784f38a6df096793471e9b',
      client_secret: 'cbf19157318b45cb921e71a933398d30'
    }).map((res: any) => {
      console.log('access token!');
      console.log(res);
      return res;
    }).subscribe(ans => {
      console.log('a');
    });
  }

  getSingleArtist(id: string) {
    const url = this.buildAPIUrl(`artists/${id}`);
    const headers = this.getHeaders();
    return this.http.get(url, {headers});
  }

  getTopTracks(id: string) {
    const url = this.buildAPIUrl(`artists/${id}/top-tracks`);
    const headers = this.getHeaders();
    return this.http.get(url, {
      headers: headers,
      params: {
        country: 'ES'
      }
    });
  }
}
