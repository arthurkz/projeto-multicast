import { Component, OnInit } from '@angular/core';
import { Podcast } from 'src/app/model/podcast.model';
import { PodcastsService } from 'src/app/services/podcast-service/podcasts.service';

@Component({
  selector: 'app-podcasts-list',
  templateUrl: './podcasts-list.component.html',
  styleUrls: ['./podcasts-list.component.css']
})

export class PodcastsListComponent implements OnInit {

  podcasts: Podcast[] = []

  constructor(private podcastService: PodcastsService) { 
      this.podcastService.podcasts().subscribe(
        podcast => {
          this.podcasts = podcast;
        }
      )
  }

  ngOnInit(): void {
  }

}
