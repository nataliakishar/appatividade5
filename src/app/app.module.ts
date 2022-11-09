import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CepProvider } from '../providers/cep/cep';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from "angularfire2/auth";

import { AngularFireModule } from 'angularfire2';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { IonicStorageModule } from '@ionic/storage';





const firebaseConfig = {
  apiKey: "AIzaSyBV6dRtOxZKzc-E3I0PIY8Fhc89_25fTI0",
  authDomain: "clinica-7435a.firebaseapp.com",
  projectId: "clinica-7435a",
  storageBucket: "clinica-7435a.appspot.com",
  messagingSenderId: "475214325888",
  appId: "1:475214325888:web:3d67b27499af3f2f0c1e65",
  measurementId: "G-HDH0G3LKV0", 
  databaseURL: "https://clinica-7435a-default-rtdb.firebaseio.com/"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CepProvider,
    UsuarioProvider
  ]
})
export class AppModule {}
