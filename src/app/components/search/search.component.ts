import {Component} from '@angular/core';
import {MusicService} from '../../services/music.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  artists;

  searchTerm: string = '';

  constructor(public _musicService: MusicService) {
  }

  searchArtist() {
    if (this.searchTerm) {
      this._musicService.getArtists(this.searchTerm).subscribe(artists => {
        this.artists = artists;
      });
    }
  }
}
