import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
 
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PerfilPageModule } from '../pages/perfil/perfil.module';
import { CidadesPorEstadosProvider } from '../providers/cidades-por-estados/cidades-por-estados';
import { HttpClientModule } from '@angular/common/http';
import { ChatListPageModule } from '../pages/chat-list/chat-list.module';
import { IntroPageModule } from '../pages/intro/intro.module';
import { LoginPageModule } from '../pages/login/login.module';
import { EsceceuSenhaPageModule } from '../pages/esceceu-senha/esceceu-senha.module';
import { CriarUsuarioPageModule } from '../pages/criar-usuario/criar-usuario.module';
import { LocalUsuarioPageModule } from '../pages/local-usuario/local-usuario.module';
import { FotoPerfilPageModule } from '../pages/foto-perfil/foto-perfil.module';






@NgModule({
  declarations: [
    MyApp,
    HomePage,
    
  
    ListPage

  ],
  imports: [
    BrowserModule,
    
   
    HttpClientModule,
    PerfilPageModule,
    ChatListPageModule,
    IonicModule.forRoot(MyApp),
    IntroPageModule,
    LoginPageModule,
    EsceceuSenhaPageModule,
    CriarUsuarioPageModule,
    LocalUsuarioPageModule,
    FotoPerfilPageModule
  

    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CidadesPorEstadosProvider
  ]
})
export class AppModule {}
