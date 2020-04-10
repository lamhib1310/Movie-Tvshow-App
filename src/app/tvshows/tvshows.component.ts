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
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss']
})
export class TvshowsComponent implements OnInit {

  @ViewChild('showSearchInput')
  showSearchInput: ElementRef;
  apiResponse: any;
  isSearching: boolean;


  shows$: Object;

  constructor(private dataService: DataService) {
    this.isSearching = false;
    this.apiResponse = [];
   }

  

  ngOnInit() {
    this.searchShows();
    this.getTvShows();
  }

  getTvShows() {
    this.dataService.getTVShows().subscribe(
      data => {this.shows$ = data as Object},
      err => console.error(err)
      );
      
  }

  searchShows() {
    fromEvent(this.showSearchInput.nativeElement, 'keyup').pipe(
      map((event: any) => {
        return event.target.value;
      }),
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe((text: string) => {
      if (text && text.length > 2) {
        this.isSearching = true;
        this.dataService.searchTvShow(text).subscribe((res) => {
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
