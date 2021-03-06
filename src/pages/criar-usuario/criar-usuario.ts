import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocalUsuarioPage } from '../local-usuario/local-usuario';

/**
 * Generated class for the CriarUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-criar-usuario',
  templateUrl: 'criar-usuario.html',
})
export class CriarUsuarioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CriarUsuarioPage');
  }


  navegarLocalUsuario(){

    this.navCtrl.push(LocalUsuarioPage);
  }
}
