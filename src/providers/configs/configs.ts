
import { Injectable } from '@angular/core';



@Injectable()
export class ConfigsProvider {

private config ={
  showSlide:false,
  name:"",
  email:""
}

  constructor() {
 
  }
//recupera os dados do localStorage
  getConfigData():any{
return localStorage.getItem("config");
  }
  //Grava os dados do localStorage
  setConfigData(showSlide?:boolean, name?:string,email?:string){
let config = {
  showSlide: false,
  name: "",
  email: ""
};
if(showSlide){
  config.showSlide = showSlide;
}

if(name){
  config.name = name;
}
if(email){
  config.email = email;

}


localStorage.setItem("config", JSON.stringify(config));
  }



}
