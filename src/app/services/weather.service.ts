import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
 url = 'https://api.hgbrasil.com/weather?woeid=457479';

  constructor(private http: HttpClient) { }

  async buscarprevisao() {
  return  this.http.get(this.url);
  }
}
