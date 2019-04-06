import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  URL_DEFAULT:string = 'http://localhost:3000/api';

  leRegistro(rota: string):Observable<any>{
    return this.http.get(this.URL_DEFAULT + rota).pipe(
      tap(data => { return data}),
      catchError(this.handleError)
    );
  }

  leRegistroComFiltro(rota: string, propriedade: string, valor):Observable<any>{
    return this.http.get(this.URL_DEFAULT + rota + `?filter[where][${propriedade}]=${valor}`).pipe(
      tap((data) => {return data}),
      catchError(this.handleError)
    );
  }

  leRegistroComFiltroAND(rota: string, propriedade1: string, valor1: any, propriedade2: string, valor2: any):Observable<any>{
    return this.http.get(this.URL_DEFAULT + rota + `?filter[where][and][0][${propriedade1}]=${valor1}&filter[where][and][1][${propriedade2}]=${valor2}`).pipe(
      tap((data) => {return data}),
      catchError(this.handleError)
    );
  }

  leRegistroComFiltroOR(rota: string, propriedade1: string, valor1: any, propriedade2: string, valor2: any):Observable<any>{
    return this.http.get(this.URL_DEFAULT + rota + `?filter[where][or][0][${propriedade1}]=${valor1}&filter[where][or][1][${propriedade2}]=${valor2}`).pipe(
      tap((data) => {return data}),
      catchError(this.handleError)
    );
  }

  leRegistroEspecifico(rota: string, id: string): Observable<any>{
    return this.http.get(this.URL_DEFAULT + rota + '/' + id).pipe(
      tap(data => {return data}),
      catchError(this.handleError)
    );
  }

  criaRegistro(rota:string, form):Observable<any>{
    return this.http.put(this.URL_DEFAULT + rota, form).pipe(
      tap(data => { return data || []}),
      catchError(this.handleError)
    );
  }

  atualizaRegistro(rota: string, id: string, form): Observable<any> {
    return this.http.patch(this.URL_DEFAULT + rota + '/' + id, form).pipe(
      tap(data => { return data}),
      catchError(this.handleError)
    );
  }

  deletaRegistro(rota: string, id: string):Observable<any>{
    return this.http.delete(this.URL_DEFAULT + rota + '/' + id).pipe(
      tap(data => { return data}),
      catchError(this.handleError)
    );
  }

  enviaEmail(rota: string, form):Observable<any>{
    // Necessario o response type pois o retorno não é em JSON
    return this.http.post(`http://localhost:3000/enviaEmail`,form, {responseType: 'text'}).pipe(
      tap(data => { return data}),
      catchError(this.handleError)
    );
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
        `body era: ${JSON.stringify(error.error.error.message)}`);
    }
    // return an observable with a user-facing error message
    return ErrorObservable.create(`${JSON.stringify(error.error.error.message)}`);
  };

}
