import { Component, OnInit } from '@angular/core';
import {AuthService } from '../../servicios/auth.service'


@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {

  email = "";
  password="";

  constructor(public authService: AuthService) { }

  logIn() {

    this.authService.login(this.email, this.password)
    this.email=""
    this.password=""
    
    //data-dismiss="modal"
  }

  logOut() {

    console.log(this,this.authService.logeado)
    localStorage.removeItem('auth_token');
    console.log(this.authService.logeado)



    
  }

  ngOnInit() {
  }


  public onOpenModal(mode: string): void{
    const container = document.getElementById('redes');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'log') {
      button.setAttribute('data-target', '#login');
    }
    container?.appendChild(button);
    button.click();
  }

}
