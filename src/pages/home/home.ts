import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';
import { ChatListPage } from '../chat-list/chat-list';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


navegarChatsList(){
  this.navCtrl.push(ChatListPage)
}


navegarPerfil(){
  this.navCtrl.push(PerfilPage)
}




}
