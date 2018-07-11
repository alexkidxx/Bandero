import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions }from '@ionic-native/camera';
/**
 * Generated class for the FotoPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-foto-perfil',
  templateUrl: 'foto-perfil.html',
  providers:[
    Camera
  ]
})
export class FotoPerfilPage {
img = "";
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private camera: Camera
    
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FotoPerfilPage');
  }
tirarFoto(){
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  
  this.camera.getPicture(options).then((imageData) => {
   // imageData is either a base64 encoded string or a file URI
   // If it's base64 (DATA_URL):
   this.img = 'data:image/jpeg;base64,' + imageData;
  }, (err) => {
   // Handle error
  });
}
}
