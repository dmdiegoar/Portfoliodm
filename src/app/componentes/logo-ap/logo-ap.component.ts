import { Component, OnInit } from '@angular/core';
import {AuthService } from '../../servicios/auth.service'

@Component({
  selector: 'app-logo-ap',
  templateUrl: './logo-ap.component.html',
  styleUrls: ['./logo-ap.component.css']
})
export class LogoAPComponent implements OnInit {

  email = "";
  password="";

  constructor(public authService: AuthService) { }

  logIn() {

    this.authService.login(this.email, this.password)
  }

  ngOnInit() {
  }


  public onOpenModal(mode: string): void{
    const container = document.getElementById('uno');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'uno') {
      button.setAttribute('data-target', '#silencio');
    }

    
    
  /*
  
    */
    container?.appendChild(button);
    button.click();
  }

}
