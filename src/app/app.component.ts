import { Component, OnInit } from '@angular/core';
import { Result } from './models/api-result.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'chapterFour';
  videos: Result[];
  constructor() {
    this.videos = [];
  }
  getVideos(results: Result[]) {
    this.videos = results;
    console.log(this.videos);
  }

  ngOnInit() {}
}
