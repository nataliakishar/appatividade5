import { Component } from '@angular/core';
import { AlertController, IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';

@IonicPage()
@Component({
  selector: 'page-cadastroclinica',
  templateUrl: 'cadastroclinica.html',
})
export class CadastroclinicaPage {

  nomecompleto = '';
  email = '';
  senha = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public usuarioProvider: UsuarioProvider,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroclinicaPage');
  }

  cadastrar() {
    const loader = this.loadingCtrl.create({
      content: "Aguarde",
     
    });
    loader.present();

    console.log('nomecompleto', this.nomecompleto);
    console.log('email',this.email);
    console.log('senha',this.senha);

    let usuario = {
      nomecompleto: this.nomecompleto,
      email: this.email,
      senha: this.senha,
      
    };
   
    //this.usuarioProvider.salvarUsuario(usuario);
    this.usuarioProvider.cadastroclinica(usuario);
    loader.dismiss();
    this.showAlert();
   
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Dados salvos',
      subTitle: 'Cadastro realizado com sucesso',
      buttons: [
        {
          text: 'ok',
          handler: data => {
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }

}
