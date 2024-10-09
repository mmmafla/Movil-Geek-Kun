import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//https://fortniteapi.io/v1/news?lang=es&type=br//
//5a8f26a2-3d756271-eed41ad1-144fe5e0//

@Injectable({
  providedIn: 'root'
})

export class FortniteShopApiService {

  private apiUrl = 'https://fortnite-api.com/v2/shop';
  private apiKey = 'afc78907-1dd3-428b-b17a-dd4ed8b161c3';
  private newsApiUrl = 'https://fortnite-api.com/v2/news';
  private newsApiKey = 'afc78907-1dd3-428b-b17a-dd4ed8b161c3';

  constructor(private http: HttpClient) { }

  getShopItems(): Observable<any> {
    return this.http.get<any>(this.apiUrl, {
      headers: {
        'Authorization': this.apiKey
      }
    });
  }
  
  getNews(): Observable<any> {
    return this.http.get<any>(this.newsApiUrl, {
      headers: {
        'Authorization': this.newsApiKey
      }
    });
  }

}