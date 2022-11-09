import { Component } from '@angular/core';
import { AlertController, IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';

@IonicPage()
@Component({
  selector: 'page-recuperarsenha',
  templateUrl: 'recuperarsenha.html',
})
export class RecuperarsenhaPage {

  email = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public usuarioProvider: UsuarioProvider,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecuperarsenhaPage');
  }

  recuperar() {
    const loader = this.loadingCtrl.create({
      content: "Aguarde",
     
    });
    loader.present();

    this.usuarioProvider.recuperarsenha(this.email);

    loader.dismiss();
    this.showAlertError();
    
  }

  showAlertError() {
    const alert = this.alertCtrl.create({
      title: 'E-mail enviado com sucesso',
      subTitle: 'Se não houver cadastro deste e-mail, ele não será enviado',
      buttons: ['OK']
    });
    alert.present();
  }

}
