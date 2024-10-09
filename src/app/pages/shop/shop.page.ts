import { Component, OnInit } from '@angular/core';
import { FortniteShopApiService } from 'src/app/services/fortnite-shop-api.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})

export class ShopPage implements OnInit {

  shopItems: any[]=[]; 
  bundle: any[] = [];
  seccion: any [] = [];
  btr: any [] = [];
  jam: any [] = [];

  constructor(private fortniteShopApiService: FortniteShopApiService) { }

  ngOnInit() {

    this.fortniteShopApiService.getShopItems().subscribe((data: any) =>{
      this.shopItems = data.data.entries;
      this.bundle = this.shopItems.filter(item => item.bundle?.image);
      this.seccion = this.shopItems.filter(item => item.layout.id == 'ChampionsRoad');
      this.jam = this.shopItems.filter(item => item.layout.name =='Jam Tracks');
      this.btr = this.shopItems.filter(item => item.brItems);
      console.log(this.shopItems);
      console.log(this.bundle);
    });

  }

}
