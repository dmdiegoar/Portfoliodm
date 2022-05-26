import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { HeaderService } from 'src/app/servicios/header.service';
import {AuthService } from '../../servicios/auth.service'


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {


  public persona : Persona | undefined;
  public editPersona : Persona | undefined;
  imgbanner = "https://fondosmil.com/fondo/28269.jpg";

  constructor(private headerService : HeaderService, public authService: AuthService) { }

  ngOnInit(): void {
    this.getPersona();
  
  }

  public getPersona():void{
    this.headerService.getPersona().subscribe({
      next: (response: Persona) => {
        this.persona=response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  subir_archivo($event) : void {
    this.subir($event.target);
  }

  subir(inputValue: any) : void {
    var file:File = inputValue.files[0]; 
    var myReader:FileReader = new FileReader();

    myReader.onloadend = function(e){
      // logica
      
      console.log(myReader.result);
    }

    myReader.readAsDataURL(file);

    //myReader.readAsText(file);
    //myReader.onloadend = function () 
    //document.getElementById("img").src = reader.result;
  }















}