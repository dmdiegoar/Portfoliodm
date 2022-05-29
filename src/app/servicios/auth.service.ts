import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { of, map, Observable } from 'rxjs';
//import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})


export class AuthService {


//api propia
//apipropia = "http://localhost:8080/login/api";
apipropia = "https://porfoliodm.herokuapp.com/login/api";


  
  ///eve.holt@reqres.in
  url = 'https://reqres.in/api/login';


  ///Developer5@gmail.com
  ///123456
  url1 = "http://restapi.adequateshop.com/api/authaccount/login";

  token;
  permisoUsuario;

  constructor(private http: HttpClient
    //, public cookies: CookieService
    ) {}

  public login(nombreUsuario: string, claveUsuario: string) {
    return this.http
      .post(this.apipropia, { nombreUsuario, claveUsuario })
      .subscribe({
        next: (resp: any) => {
          console.log(resp);
         localStorage.setItem('auth_token', resp.permisoUsuario);
          console.log(this.logeado)
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.message);
        },
      });
  }

  public logout() {
    console.log(this.logeado)
    localStorage.removeItem('auth_token');
    console.log(this.logeado)
  }

  public get logeado(): boolean {
    return localStorage.getItem('auth_token') !== null;
  }

//  setToken(token: string) {
//    this.cookies.set('token', token);
//  }
//  getToken() {
//    return this.cookies.get('token');
//  }
}
