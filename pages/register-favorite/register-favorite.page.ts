import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/services/dbservice.service';

@Component({
  selector: 'app-register-favorite',
  templateUrl: './register-favorite.page.html',
  styleUrls: ['./register-favorite.page.scss'],
})
export class RegisterFavoritePage implements OnInit {

  nameFavorite = "";
  priceFavorite = "";

  constructor(private dbservice: DbserviceService, private router: Router) { }

  saveFavorite() {
    this.dbservice.addFavorite(this.nameFavorite,this.priceFavorite);
    this.dbservice.presentToast("Objeto agregado");
    this.router.navigate(['/tab-componet/news']);
  }

  ngOnInit() {
  }

}
