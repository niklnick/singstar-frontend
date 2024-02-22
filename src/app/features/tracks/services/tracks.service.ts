import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Track } from '../models/track.model';

@Injectable({
  providedIn: 'root'
})
export class TracksService {
  private readonly baseUrl: string = environment.apiUrl + '/tracks';

  constructor(private readonly httpClient: HttpClient) { }

  getTracks(): Observable<Track[]> {
    return this.httpClient.get<Track[]>(this.baseUrl);
  }
}
