import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { BaseUrl } from './../compartilhados/baseurl';

import { Login } from './../compartilhados/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  URL_DEFAULT:string = `${BaseUrl}/Customers`;
  token = null;

  constructor(private http: HttpClient) { }

  login(form){
    return this.http.post<Login>(this.URL_DEFAULT + '/login', form).pipe(
      tap(
        (data) => {return this.setaSessao(data.id, data.ttl)},
      ),
      catchError(this.handleError)
    );
  }

  private setaSessao(token, expiracao){
    const expira = expiracao;

    console.log(token);
    console.log(expira);


    sessionStorage.setItem('id_token', token);
    sessionStorage.setItem("expira_em", JSON.stringify(expira.valueOf()));
  }

  logout(){
    sessionStorage.removeItem("id_token");
    sessionStorage.removeItem("expira_em");
    return console.log('Usuario deslogado');
  }

  public verificaSeEstaLogado() {
    const token = sessionStorage.getItem('id_token');

    if(token){
      return true;
    } else {
      return this.naoEstaLogado();
    }
  }

  naoEstaLogado() {
    return false;
  }

  leExpiracao(){
    const expiracao = sessionStorage.getItem("expira_em");
    const expiraEm = JSON.parse(expiracao);
    return moment(expiraEm);
  }

    // Tratamento de erro
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('Um erro ocorreu', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend retornou a msg ${error.status}, ` +
        `body era: ${JSON.stringify(error)}`);
    }
    // return an observable with a user-facing error message
    return ErrorObservable.create(`${JSON.stringify(error.message)}`);
  };

}
