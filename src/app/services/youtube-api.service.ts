import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from '../models/api-result.model';
import { map } from 'rxjs/operators';

export const API_URL = 'https://www.googleapis.com/youtube/v3';
export const API_TOKEN = 'AIzaSyCGRORippuQ8kTer1yhLjJYsImrLfU0mcU';

@Injectable()
export class YouTubeApiService {
  title: string;

  constructor(
    private http: HttpClient,
    @Inject(API_URL) private apiUrl: string,
    @Inject(API_TOKEN) private apiToken: string
  ) {
    this.title = '';
  }

  search(valueToSearch: string): Observable<any> {
    return this.http
      .get(
        `${this.apiUrl}/search?part=snippet&maxResults=10&q=${valueToSearch}&key=${API_TOKEN}`
      )
      .pipe(
        map((response: any) => {
          const results: Result[] = [];
          response.items.map((item: any) => {
            results.push(
              new Result(
                item.snippet.title,
                item.snippet.description,
                item.snippet.thumbnails.default.url,
                `https://www.youtube.com/watch?v=${item.id.videoId}`
              )
            );
          });
          return results;
        })
      );

    // .subscribe((response: any) => {
    //   this.title = response.items[0].snippet.title;
    // });
  }
}
// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=kedi&key=[YOUR_API_KEY]
