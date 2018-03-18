import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MusicService} from '../../services/music.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  artist: any = {};

  constructor(private activatedRoute: ActivatedRoute, private musicService: MusicService) {
  }

  ngOnInit() {
    this.activatedRoute.params.map(params => params.id)
      .subscribe((id) => {
        this.musicService.getSingleArtist(id).subscribe(artist => {
          this.artist = artist;
        });
      });
  }
}
