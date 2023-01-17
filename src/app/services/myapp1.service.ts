import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Myapp1Service {
  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string){
    this.http.get(environment.myapp1ApiBaseUrl, {
      headers: new HttpHeaders()
    })

  }

 
     
  
}
