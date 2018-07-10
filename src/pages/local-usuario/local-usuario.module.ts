import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocalUsuarioPage } from './local-usuario';

@NgModule({
  declarations: [
    LocalUsuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(LocalUsuarioPage),
  ],
})
export class LocalUsuarioPageModule {}
