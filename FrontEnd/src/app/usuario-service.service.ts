import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Usuario } from 'src/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  constructor(private http: HttpClient) { }

  addUsuario(usuario: Usuario): Observable<Usuario> {

    let formData: FormData = new FormData();
    formData.append("curriculo", usuario.curriculo);
    formData.append("email", usuario.email);
    formData.append("nome", usuario.nome);
    formData.append("profissao", usuario.profissao);
    formData.append("endereco", usuario.endereco);
    return this.http.post<Usuario>("http://localhost:5000/usuarios", formData)
      //return this.http.post<Usuario>("http://localhost:4200/usuarios", formData)
      .pipe(
        catchError(this.handleError)
      );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
