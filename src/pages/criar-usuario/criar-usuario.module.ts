import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CriarUsuarioPage } from './criar-usuario';

@NgModule({
  declarations: [
    CriarUsuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(CriarUsuarioPage),
  ],
})
export class CriarUsuarioPageModule {}
