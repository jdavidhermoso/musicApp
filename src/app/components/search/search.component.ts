import {Component} from '@angular/core';
import {MusicService} from '../../services/music.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  artists;

  constructor(public _musicService: MusicService) {
    this._musicService.getArtists().subscribe(artists => {
      console.log(artists);
    });
  }
}
