import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { of } from "rxjs";
import {
  debounceTime,
  map,
  distinctUntilChanged,
  filter
} from "rxjs/operators";
import { fromEvent } from 'rxjs';
import { DataService } from '../data.service';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  @ViewChild('movieSearchInput')
  movieSearchInput: ElementRef;
  apiResponse: any;
  isSearching: boolean;

  movies$: Object;


  constructor(private dataService: DataService) {
    this.isSearching = false;
    this.apiResponse = [];
  }

  ngOnInit() {
    this.searchMovies();
    this.getMovies();

  }

  getMovies() {
    this.dataService.getMovies().subscribe(
      data => { this.movies$ = data as Object },
      err => console.error(err)
    );
  }


  searchMovies() {
    fromEvent(this.movieSearchInput.nativeElement, 'keyup').pipe(
      map((event: any) => {
        return event.target.value;
      }),
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe((text: string) => {
      if (text && text.length > 2) {
        this.isSearching = true;
        this.dataService.searchMovies(text).subscribe((res) => {
          this.apiResponse = res as Object;
        }, (err) => {
          this.isSearching = false;
          console.log('error', err);
        });
      }
      else
      {
        this.apiResponse = [];
        this.isSearching = false;

      }
    });
  }


}
