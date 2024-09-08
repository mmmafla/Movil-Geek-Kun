import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Definir las interfaces para la estructura de la respuesta
interface ShopResponse {
  status: number;
  data: {
    hash: string;
    date: string; // o Date, dependiendo de cómo prefieras manejar las fechas
    vbuckIcon: string;
    entries: Entry[];
  };
}

interface Entry {
  regularPrice: number;
  finalPrice: number;
  devName: string;
  offerId: string;
  inDate: string; // o Date
  outDate: string; // o Date
  bundle?: {
    name: string;
    info: string;
    image: string;
  };
  banner?: {
    value: string;
    intensity: string;
    backendValue: string;
  };
  offerTag?: {
    id: string;
    text: string;
    giftable: boolean;
    refundable: boolean;
  };
  layout?: {
    id: string;
    name: string;
    category: string;
    index: number;
    rank: number;
    showIneligibleOffers: string;
    background: string;
    useWidePreview: boolean;
    displayType: string;
    textureMetadata: { key: string; value: string }[];
    stringMetadata: { key: string; value: string }[];
    textMetadata: { key: string; value: string }[];
    colors: {
      color1: string;
      color2: string;
      color3: string;
      textBackgroundColor: string;
      tileSize: string;
    };
    displayAssetPath: string;
    newDisplayAssetPath: string;
    newDisplayAsset: {
      id: string;
      cosmeticId: string;
      materialInstances: { id: string; primaryMode: string; productTag: string }[];
    };
  };
  // Otros campos que puedan ser necesarios...
}

@Injectable({
  providedIn: 'root'
})
export class FortniteService {

  private apiUrl = 'https://fortnite-api.com/v2/shop';
  private apiKey = 'afc78907-1dd3-428b-b17a-dd4ed8b161c3';

  constructor(private http: HttpClient) { }

  getShopItems(): Observable<ShopResponse> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`
    });
    return this.http.get<ShopResponse>(this.apiUrl, { headers });
  }
}
