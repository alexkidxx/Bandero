import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChatListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat-list',
  templateUrl: 'chat-list.html',
})
export class ChatListPage {
 


  constructor(public navCtrl: NavController, public navParams: NavParams) {

   
  }

  ionViewDidLoad() {
  
    console.log('ionViewDidLoad ChatListPage');
  }
navegarChat(nomeBanda:String){
  
  nomeBanda = "Mertiolate";
  console.log("pra onde vai");
  console.log(nomeBanda);
  this.navCtrl.push("ChatPage");


}


}
