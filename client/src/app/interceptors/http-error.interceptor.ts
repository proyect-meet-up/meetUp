import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { SnackbarService } from '@shared/componentes/services/snackbar.service';


@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(
    private snackbarService: SnackbarService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMsg = '';
          if ( error.error instanceof ErrorEvent) {
            console.log('Es un error del lado del cliente');
            errorMsg = `${error.error.message}`
          }
          else {
            console.log('Es un error del lado del back');
            errorMsg = `${error.error.msg}`;

            if ( error.status === 401) {
              errorMsg = `${error.error.message}`;
            } else {
              this.snackbarService.mostrar( errorMsg , 'error')
              // Swal.fire({
              //   icon: 'error',
              //   text: errorMsg,
              // })
            }
;
          }
          return throwError(`Uppsss se ha producido un error ${errorMsg} => URL ${error.url}`);
        })
      )
  }
}
