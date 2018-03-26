import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MusicService {
  apiBaseURL = 'https://api.spotify.com/v1/';

  constructor(public http: HttpClient) {
    console.log('Musc service Ready!');
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': 'Bearer BQDZc9odaD-PG89xKTMCf7EH-SA3CCKSNvJA5GfAW6pUWh0jochDD5lA4n5nSHi2yn2aFHkSHhlCdy6p8mk'
    });
  }

  private buildAPIUrl(endPoint): string {
    return `${this.apiBaseURL}${endPoint}`;
  }

  getArtists(artist) {
    const url = this.buildAPIUrl(`search?query=${artist}&type=artist&market=US&offset=0&limit=20`);
    return this.http.get(url, {headers: this.getHeaders()}).map((res: any) => {
      return res.artists.items;
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
