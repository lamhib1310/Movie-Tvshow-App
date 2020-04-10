import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of, Subscription } from 'rxjs';
import { tap, startWith, debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';

const APIKEY = "853388d59402dc44a3aa9df1a31b8603";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  getMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated' + '?api_key=' + APIKEY );
  }

  getTVShows() {
    return this.http.get('https://api.themoviedb.org/3/tv/top_rated' + '?api_key=' + APIKEY );
  }

  getMovie(movieId) {
    return this.http.get('https://api.themoviedb.org/3/movie/' + movieId + '?api_key=' + APIKEY );
  }

  getTvshow(showId) {
    return this.http.get('https://api.themoviedb.org/3/tv/' + showId + '?api_key=' + APIKEY );
  }

  searchMovies(term: string) {
    if (term == '') {
      return of([]);
    }
    return (this.http.get('https://api.themoviedb.org/3/search/movie'+'?api_key=' + APIKEY + '&query=' + term));
            
  }

  searchTvShow(term: string) {
    if (term == '') {
      return of([]);
    }
    return (this.http.get('https://api.themoviedb.org/3/search/tv'+'?api_key=' + APIKEY + '&query=' + term));
            
  }


}
    