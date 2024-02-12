import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { map } from 'rxjs';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor(private http:HttpClient) { }

  getAllAirLines(){
    return this.http.get('assets/response.json');
  }
}
