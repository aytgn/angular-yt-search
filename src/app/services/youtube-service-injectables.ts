//export array of objects with provide and useClass(for my service) and useValue(api)

import { YouTubeApiService, API_URL, API_TOKEN } from './youtube-api.service';

export const YoutubeServiceInjectables: Array<any> = [
  { provide: YouTubeApiService, useClass: YouTubeApiService },
  { provide: API_URL, useValue: API_URL },
  { provide: API_TOKEN, useValue: API_TOKEN },
];
