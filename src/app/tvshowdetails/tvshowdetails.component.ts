import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tvshowdetails',
  templateUrl: './tvshowdetails.component.html',
  styleUrls: ['./tvshowdetails.component.scss']
})
export class TvshowdetailsComponent implements OnInit {

  show$: Object;

  constructor(private route: ActivatedRoute, private dataService: DataService) {
     this.route.params.subscribe( params => this.show$ = params.id );
  }

  getShow() {
    this.dataService.getTvshow(this.show$).subscribe(
      data => {this.show$ = data as Object},
      err => console.error(err),
      () => console.log("ucitani podaci")
      );
      
  }

  ngOnInit() {
    this.getShow();
  }

}
