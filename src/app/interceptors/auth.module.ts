import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
 HttpEvent,
 HttpInterceptor,
 HttpHandler,
 HttpRequest,
} from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {

        const idToken = sessionStorage.getItem("id_token");

        if (idToken) {
            const cloned = req.clone({
                headers: req.headers.set("Authorization",
                    idToken)
            });

            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    }
}