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
