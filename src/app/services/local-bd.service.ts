import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Favorite } from '../interfaces/favorite';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})

export class DblocalService {

  favorito : Favorite[] = [];
  private _storage: Storage | null=null;

  constructor(private storage:Storage, private toastController:ToastController) {
    this.Init();
    this.cargarFavorito();
   }
  async Init() {
    const storage =  await this.storage.create();
    this._storage = storage;
  }

  async cargarFavorito() {
    const misFavoritos = await this.storage.get('favorito');
    if(misFavoritos)
    {
      this.favorito=misFavoritos; 
    }    
  }

  guardarFavorito(nombre:string,nro:number){
    const existe = this.favorito.find(c => c.intNumber === nro);    
    if(!existe){
      this.favorito.unshift({strName:nombre, intNumber:nro})//permite insertar un nuevo elemento al inicio de la colección
      this._storage?.set('agenda',this.favorito);
      this.presentToast("favorito Agregado")
    }else{
      this.presentToast("favorito Ya Existe")
    }   
  }

  async quitarFavorito(nro: number){
    const existe=this.favorito.find(c => c.intNumber === nro);
    if (existe) {
      this.favorito=this.favorito.filter(c=>c.intNumber !== nro);
      this._storage?.set('favorito', this.favorito);
      this.presentToast("Se ha eliminado de los favoritos");    
    }else{
      this.presentToast("Ese N° no Existe en los favoritos");
    }    
  }

  async borrarBD() {
    await this._storage?.clear();
    this.favorito=[];
    console.log(this.favorito.length);
    this.presentToast("Se ha eliminado de la BD"); 
  }

  async presentToast(mensaje:string) {
    const toast = await this.toastController.create({
      message: mensaje,
      translucent:true,
      color:'medium',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

  async mostrarBD(){
    return this.favorito;
  }

  
}