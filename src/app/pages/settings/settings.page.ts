import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DbserviceService } from 'src/app/services/dbservice.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {

  favorite: any = [
    {
      name: "Nombre del objeto",
      price: "Precio del objeto"
    }
  ]



  constructor(private router: Router, private serviceBD: DbserviceService) { }

  ngOnInit() {

    this.serviceBD.dbState().subscribe((res: any) =>{
      if(res){
        this.serviceBD.fetchFavorite().subscribe((item: any) =>{
          this.favorite = item;
        })
      }
    });

  }

  getItem($event: any) {
    const valor = $event.target.value;
    console.log('valor del control: ' + valor);
  }

  edit(item: any) {
    let navigationextras: NavigationExtras = {
      state : {
        idSend : item.id,
        nameSend : item.name,
        priceSend : item.price
      }
    }
    this.router.navigate(['/tab-componet/settings'],navigationextras);
  }

  delete(item: any) {
    this.serviceBD.deleteFavorite(item.id);
    this.serviceBD.presentToast("Objeto eliminado");
  }

}