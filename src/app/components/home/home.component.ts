import { Component, OnInit } from '@angular/core';
import {MusicService} from '../../services/music.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private musicService: MusicService) { }

  ngOnInit() {
    this.musicService.getRequestToken();
  }

}
