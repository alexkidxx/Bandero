import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FotoPerfilPage } from '../foto-perfil/foto-perfil';

/**
 * Generated class for the LocalUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-local-usuario',
  templateUrl: 'local-usuario.html',
})
export class LocalUsuarioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocalUsuarioPage');
  }
navegarFotoPerfil(){
  this.navCtrl.push(FotoPerfilPage);
}
}
