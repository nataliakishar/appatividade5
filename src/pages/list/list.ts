import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  
  usuarios = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public usuarioProvider: UsuarioProvider
    ) {

      this.usuarioProvider.ListarUsuarios().subscribe(_data => {
        console.log(_data);

        this.usuarios = _data;

      });

  }
  

}
