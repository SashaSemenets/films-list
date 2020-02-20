import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ParamInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const paramReq = req.clone({
            setHeaders: {
                'Access-Control-Allow-Origin': '*'
            },
            params: req.params.set(
                'token',
                `${environment.token}`
            )
        });

        return next.handle(paramReq);
    }
}