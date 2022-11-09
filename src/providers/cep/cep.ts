import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class CepProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CepProvider Provider');
  }

  obterEnderecoPeloCeo(cep) {
    return this.http.get('https://viacep.com.br/ws/'+ cep + '/json');


  }

}
