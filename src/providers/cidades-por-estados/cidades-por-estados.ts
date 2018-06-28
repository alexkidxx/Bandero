import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the CidadesPorEstadosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CidadesPorEstadosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CidadesPorEstadosProvider Provider');
  }




getCidades(){

 return this.http.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/35/municipios");
}

}
