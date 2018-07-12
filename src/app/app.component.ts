import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import { IntroPage } from '../pages/intro/intro';
import { ConfigsProvider } from '../providers/configs/configs';
import { PerfilPage } from '../pages/perfil/perfil';
import { ConfigsPage } from '../pages/configs/configs';
import { SobrePage } from '../pages/sobre/sobre';
import { ContatoPage } from '../pages/contato/contato';

@Component({
  templateUrl: 'app.html',
  providers:[
    ConfigsProvider
  ]

})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = IntroPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,
     public statusBar: StatusBar,
      public splashScreen: SplashScreen,
     private configProvider: ConfigsProvider

    ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Perfil', component: PerfilPage },
      { title: 'Configs', component: ConfigsPage },
      { title: 'Sobre', component: SobrePage },
      { title: 'Contato', component: ContatoPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      let config = this.configProvider.getConfigData();

      if(config==null){
       this.configProvider.setConfigData(false);
       this.rootPage = IntroPage;
      }else{
        this.rootPage = HomePage;
      }

      console.log(config);
     
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
