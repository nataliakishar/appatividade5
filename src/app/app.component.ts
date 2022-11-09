import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'LoginclinicaPage';

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,
     public statusBar: StatusBar, 
     public splashScreen: SplashScreen,
     public storage: Storage

     
     ) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Usuários', component: ListPage },
      { title: 'Endereços', component: 'InforusuarioPage'}

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.storage.get('usuario').then(_usuarioclinica =>{
        console.log('AP COMPONENTS',_usuarioclinica);

        if (_usuarioclinica && _usuarioclinica.legth > 0 ) {
          this.rootPage = HomePage;}
          else {
            this.rootPage = 'LoginclinicaPage';
          }

      });
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  logout() {
    this.storage.remove('usuario').then(_data => {
      this.nav.setRoot('LoginclinicaPage');
    });
  }
}
