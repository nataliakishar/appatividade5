import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class UsuarioProvider {

  constructor(public http: HttpClient,
    public afd: AngularFireDatabase, 
    public afa: AngularFireAuth

    ) {
    console.log('Hello UsuarioProvider Provider');
  }

  loginclinica(email, senha) {
    return this.afa.auth.signInWithEmailAndPassword(email, senha);

  }
  cadastroclinica(usuario) {
    this.afa.auth.createUserWithEmailAndPassword(usuario.email, usuario.senha)
      .then(_usuarioAuth => {
        _usuarioAuth.id = _usuarioAuth.uid;
        delete usuario.senha;
        this.salvarUsuario(usuario);

       }).catch(error => {
        console.log[error];

       })
       ;
      
  }

  recuperarsenha(email) {
   return this.afa.auth.sendPasswordResetEmail(email);

  }

  salvarUsuario(usuario) {
    this.afd.object('/usuarios/' + usuario.id).update(usuario);

  }
  ListarEnderecos() {
    return this.afd.list('/enderecos').valueChanges();
  }

  ListarUsuarios() {
    return this.afd.list('/usuarios').valueChanges();
  }

  salvarCep(endereco) {
    //this.afd.object('/endereco').update(endereco);
    this.afd.list('/endereco').push(endereco);

  }


}



