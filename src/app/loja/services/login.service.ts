import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  URL_DEFAULT:string = 'http://localhost:3000/api/Customers';

  constructor(private http: HttpClient) { }

  login(form){
    console.log(form);  
    return this.http.post(this.URL_DEFAULT + '/login', form).pipe(
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
        `body era: ${JSON.stringify(error)}`);
    }
    // return an observable with a user-facing error message
    return ErrorObservable.create(`${JSON.stringify(error.message)}`);
  };

}
