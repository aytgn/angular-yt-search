import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { YouTubeApiService } from '../services/youtube-api.service';
import { Result } from '../models/api-result.model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  title: string;
  thumbnailUrl: string;
  valueToSearch: string;
  searchForm: FormGroup;
  @Output('videos') results: EventEmitter<Result[]>;
  constructor(private fb: FormBuilder, private ytService: YouTubeApiService) {
    this.title = '';
    this.thumbnailUrl = '';
    this.valueToSearch = '';
    this.results = new EventEmitter<Result[]>();
    this.searchForm = this.fb.group({
      searchValue: [''],
    });
  }

  onClick() {
    this.ytService.search(this.valueToSearch).subscribe((results: Result[]) => {
      this.results.emit(results);
    });
  }

  ngOnInit(): void {
    this.searchForm.get('searchValue')?.valueChanges.subscribe((val) => {
      this.valueToSearch = val;
    });
  }
}
// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=kedi&key=[YOUR_API_KEY]
