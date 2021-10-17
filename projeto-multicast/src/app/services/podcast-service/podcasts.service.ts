import { Injectable } from '@angular/core';
import { Podcast } from 'src/app/model/podcast.model';
import { HttpClient} from '@angular/common/http'
import { URL_API } from '../../app.api'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PodcastsService {

  constructor(private http: HttpClient) { }

  podcasts(): Observable<Podcast[]>{
    return this.http.get<Podcast[]>(`${URL_API}/podcasts`);
  }
  
}
  