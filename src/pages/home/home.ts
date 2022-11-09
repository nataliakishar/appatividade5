import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CepProvider } from '../../providers/cep/cep';
import { UsuarioProvider } from '../../providers/usuario/usuario';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cep = '';

  constructor(public navCtrl: NavController,
    public cepProvider: CepProvider,
    public usuarioProvider: UsuarioProvider
    
    ) {

  }

  buscarCEP(){
    console.log(this.cep);

    this.cepProvider.obterEnderecoPeloCeo(this.cep).subscribe(_data => {
      console.log(_data);

      this.usuarioProvider.salvarCep(_data);
    });
  }
    
  

}
