import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';



@IonicPage()
@Component({
  selector: 'page-inforusuario',
  templateUrl: 'inforusuario.html',
})
export class InforusuarioPage {

  enderecos = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public usuarioProvider: UsuarioProvider
    ) {

      this.usuarioProvider.ListarEnderecos().subscribe(_data => {
        console.log(_data);

        this.enderecos = _data;

      });

  }
}
