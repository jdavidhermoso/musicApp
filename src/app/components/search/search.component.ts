import {Component} from '@angular/core';
import {MusicService} from '../../services/music.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  constructor(public _musicService: MusicService) {
    this._musicService.getArtists().subscribe(res => {
      console.log(res);
    });
  }


}
