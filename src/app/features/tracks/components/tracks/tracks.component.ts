import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Track } from '../../models/track.model';
import { TracksService } from '../../services/tracks.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent {
  readonly tracks$: Observable<Track[]>;

  constructor(private readonly tracksService: TracksService) {
    this.tracks$ = this.tracksService.getTracks();
  }
}
