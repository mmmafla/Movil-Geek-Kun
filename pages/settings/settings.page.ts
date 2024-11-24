import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DblocalService } from 'src/app/services/local-bd.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {

  favoritos: any = [];
  name!: string;
  number!: number;

  constructor(private dbLocalService:DblocalService) { }

  guardar(){
    console.log(this.name);
    console.log(this.number);
    
    this.dbLocalService.guardarFavorito(this.name,this.number);
    this.favoritos =(this.dbLocalService.mostrarBD());
    console.log(this.favoritos);
  }

  eliminar(){
    console.log(this.number);    
    this.dbLocalService.quitarFavorito(this.number);
    this.favoritos =(this.dbLocalService.mostrarBD());
  }
  
  borrarBD(){
    this.dbLocalService.borrarBD();
    this.favoritos =(this.dbLocalService.mostrarBD());
  }

  mostrarBD() {
    this.favoritos =(this.dbLocalService.mostrarBD());
  }

}