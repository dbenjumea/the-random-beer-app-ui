import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import 'rxjs/add/operator/map'
import {Beer} from '../entities/beer';

@Injectable()
export class BeersService {

  constructor(
    private http: HttpClient) {
  }

  getBeerService(): Observable<Beer[]> {
    const getAllBeerUrl = environment.apiUrl + '/beers';
    return this.http.get<Beer[]>(getAllBeerUrl);
  }

  getCountOfBeers(): Observable<number> {
    const getCountOfBeersUrl = environment.apiUrl + '/beers/count';
    return this.http.get<number>(getCountOfBeersUrl);
  }

  getBeerRandomService(id: number): Observable<Beer> {
    const getBeerRandomServiceUrl = environment.apiUrl + '/beers/' + id;
    return this.http.get<Beer>(getBeerRandomServiceUrl);
  }
}
