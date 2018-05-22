import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Beer} from './entities/beer';
import {BeersService} from './service/beers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BeersService]
})
export class AppComponent implements OnInit {
  beers: Beer[];
  beer: Beer;
  beersCount: number;

  constructor(private http: HttpClient, private service: BeersService) {
  }

  ngOnInit(): void {
    this.service.getCountOfBeers().subscribe(
        response => this.beersCount = response
    );
  }
  getRandomBeer(): void {
    const randomId = Math.floor(Math.random() * this.beersCount) + 1;
    this.service.getBeerRandomService(randomId).subscribe(
          response => this.beer = response);
  }
  onClick(): void {
    this.getRandomBeer();
  }
}
