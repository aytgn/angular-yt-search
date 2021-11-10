import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../models/api-result.model';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss'],
})
export class VideoCardComponent implements OnInit {
  @Input() video: Result;

  constructor() {
    this.video = new Result('', '', '', '');
  }

  ngOnInit(): void {}
}
