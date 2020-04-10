import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailsmovie',
  templateUrl: './detailsmovie.component.html',
  styleUrls: ['./detailsmovie.component.scss']
})
export class DetailsmovieComponent implements OnInit {

  movie$: Object;

  constructor(private route: ActivatedRoute, private dataService: DataService) {
     this.route.params.subscribe( params => this.movie$ = params.id );
  }

  getMovie() {
    this.dataService.getMovie(this.movie$).subscribe(
      data => {this.movie$ = data as Object},
      err => console.error(err),
      () => console.log("ucitani podaci")
      );
      
  }

  ngOnInit() {
    this.getMovie();
  }

}
