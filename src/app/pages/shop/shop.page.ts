import { Component, OnInit } from '@angular/core';
import { FortniteShopApiService } from 'src/app/services/fortnite-shop-api.service';
import { DblocalService } from 'src/app/services/local-bd.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})

export class ShopPage implements OnInit {

  favoritos: any = [];
  name!: string;
  number!: number;

  shopItems: any[]=[]; 
  bundle: any[] = [];
  seccion: any [] = [];
  btr: any [] = [];
  jam: any [] = [];

  constructor(private fortniteShopApiService: FortniteShopApiService, private dbLocalService:DblocalService) { }

  guardar(){
    console.log(this.name);
    console.log(this.number);
    this.dbLocalService.guardarFavorito(this.name,this.number);
    this.favoritos =(this.dbLocalService.mostrarBD());
    console.log(this.favoritos);
  }

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
