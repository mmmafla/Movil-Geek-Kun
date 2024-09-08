import { Component, OnInit } from '@angular/core';
import { FortniteService } from 'src/app/services/fortnite.service';


@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.page.html',
  styleUrls: ['./tienda.page.scss'],
})
export class TiendaPage implements OnInit {

  shopItems: any[] = []; // Artículos con imagen
  filteredItems: any[] = []; // Artículos que tienen imagen

  constructor(private fortniteService: FortniteService) { }

  ngOnInit() {
    this.fortniteService.getShopItems().subscribe(
      response => {
        this.shopItems = response.data.entries;
        this.filteredItems = this.shopItems.filter(item => item.bundle?.image);
        console.log(this.filteredItems); // Para depuración
      },
      error => {
        console.error('Error al obtener los artículos de la tienda', error);
      }
    );
  }
}