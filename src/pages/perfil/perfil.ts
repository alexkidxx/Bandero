import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CidadesPorEstadosProvider } from '../../providers/cidades-por-estados/cidades-por-estados';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
  providers:[
    CidadesPorEstadosProvider
  ]
})



export class PerfilPage {

  public lista_cidades = new Array<any>();

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
      private cidadePorEstadosProvider : CidadesPorEstadosProvider
    ) {
  }

  ionViewDidLoad() {


    this.cidadePorEstadosProvider.getCidades().subscribe(
      
      data=>{
        const response = (data as any);
       // const objeto_retorno = JSON.parse(response._body);
       this.lista_cidades = response;
        console.log(response);
      },error =>{
        console.log(error);
      }
    )
    
  }

}
