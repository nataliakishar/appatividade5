import { Component } from '@angular/core';
import { AlertController, IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { HomePage } from '../home/home';

import { Storage } from '@ionic/storage';




@IonicPage()
@Component({
  selector: 'page-loginclinica',
  templateUrl: 'loginclinica.html',
})
export class LoginclinicaPage {

  email = '';
  senha = '';
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public usuarioProvider: UsuarioProvider,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private storage: Storage
    
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroclinicaPage');
  }

  entrar() {
    const loader = this.loadingCtrl.create({
      content: "Aguarde",
     
    });
    loader.present();

    this.usuarioProvider.loginclinica(this.email, this.senha)
    .then(usuario =>{
      loader.dismiss();
      console.log('usuario', usuario);

      this.storage.set('usuario', usuario.uid).then(_data => {
        this.navCtrl.setRoot(HomePage);

      });
      
    
    })

    .catch(error => {
      loader.dismiss();
      console.log('Erri', error)
      this.showAlertError();
      
    })
  
  
  }

  showConfirm() {
    this.navCtrl.push('CadastroclinicaPage');
  }

  redirecionaresquecisenha() {
    this.navCtrl.push('RecuperarsenhaPage');
  }


  showAlertError() {
    const alert = this.alertCtrl.create({
      title: 'Erro',
      subTitle: 'Não foi possível realizar o login, contact o provedor',
      buttons: ['OK']
    });
    alert.present();
  }

}
