import { Component, OnInit, Input } from '@angular/core';
import { Podcast } from 'src/app/model/podcast.model';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.css']
})
export class PodcastComponent implements OnInit {

  @Input() podcast!: Podcast

  constructor() { }

  ngOnInit(): void {
  }

}
