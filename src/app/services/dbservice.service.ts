import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { BehaviorSubject, Observable } from 'rxjs';
import { Favorite } from '../classes/favorite';
import { Platform, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {

  public database!: SQLiteObject;
  tblFavorite: string = "CREATE TABLE IF NOT EXISTS favorite(id INTEGER PRIMARY KEY autoincrement, name VARCHAR(50) NOT NULL, price NUMBER(9) NOT NULL);";
  listFavorite = new BehaviorSubject<Favorite[]>([]);

  private isDbReady:
    BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor(private sqlite: SQLite,
      private platform: Platform,
      public toastController: ToastController) {
      this.createBD();
    }
  

   /**
   * Método que crea la BD si no Existe o carga la existente
   */
   createBD() {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'favorites.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        this.database = db;
        this.presentToast("BD creada");
        //llamo a crear la(s) tabla(s)
        this.createTables();
      }).catch(e => this.presentToast(e));
    })
  }

  /**
     * Método que crea la tabla de la BD si no Existe o carga la existente
     */
  async createTables() {
    try {
      await this.database.executeSql(this.tblFavorite, []);
      this.presentToast("Tabla creada");
      this.loadFavorite();
      this.isDbReady.next(true);
    } catch (error) {
      this.presentToast("Error en Crear Tabla: " + error);
    }
  }

  /**
     * Método que carga en la listaNoticias TODO el contenido de la tabla noticia
     */
  loadFavorite() {
    let items: Favorite[] = [];
    this.database.executeSql('SELECT * FROM favorite', [])
      .then(res => {
        if (res.rows.length > 0) {
          for (let i = 0; i < res.rows.length; i++) {
            items.push({
              id: res.rows.item(i).id,
              name: res.rows.item(i).name,
              price: res.rows.item(i).price
            });
          }
        }
      });
    this.listFavorite.next(items);
  }

  /**
     * Método que inserta un registro en la tabla noticia
     */
  async addFavorite(name: any, price: any) {
    let data = [name, price];
    await this.database.executeSql('INSERT INTO favorite(name,price) VALUES(?,?)', data);
    this.loadFavorite();
  }

  /**
     * Método que actualiza el título y/o el texto filtrando por el id
     */
  async updateFavorite(id: any, name: any, price: any) {
    let data = [name, price, id];
    await this.database.executeSql('UPDATE favorite SET name=?, price=? WHERE id=?', data);
    this.loadFavorite();
  }

  /**
     * Método que elimina un registro por id de la tabla noticia
     */
  async deleteFavorite(id: any) {
    await this.database.executeSql('DELETE FROM favorite WHERE id=?', [id]);
    this.loadFavorite();
  }

  /**
     * Método que verifica la suscripción del Observable
     */
  dbState() {
    return this.isDbReady.asObservable();
  }

  /**
     * Método que se ejecuta cada vez que se hace un cambio en la tabla de la BD
     */
  fetchFavorite(): Observable<Favorite[]> {
    return this.listFavorite.asObservable();
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

}
