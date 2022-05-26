import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { HeaderService } from 'src/app/servicios/header.service';
import {AuthService } from '../../servicios/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email = "";
  password="";

  constructor(public authService: AuthService) { }

  logIn() {

    this.authService.login(this.email, this.password)
  }

  ngOnInit() {
  }



}
