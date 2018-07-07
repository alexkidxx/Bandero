import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CriarUsuarioPage } from '../criar-usuario/criar-usuario';
import { EsceceuSenhaPage } from '../esceceu-senha/esceceu-senha';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  inscrever(){
    this.navCtrl.push(CriarUsuarioPage);
  }
  esqueceuSenha(){
this.navCtrl.push(EsceceuSenhaPage);

  }
  goToHome(){
    //implementar o se existe o local storage
    this.navCtrl.push(HomePage);
  }

}
