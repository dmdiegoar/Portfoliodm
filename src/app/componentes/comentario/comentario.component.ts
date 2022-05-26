import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { HeaderService } from 'src/app/servicios/header.service';
import {AuthService } from '../../servicios/auth.service'


@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {


  public persona : Persona | undefined;
  public updatePersona : Persona | undefined;
  

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



  public onUpdatePersona(persona: Persona):void {
    this.headerService.updatePersona(persona).subscribe({
    next:(response: Persona) => {
    console.log(response);
    this.getPersona();
    
    },
    error:(error: HttpErrorResponse) => {
    alert(error.message);
    }
    
  })
  }

  public onOpenModal(mode: string, persona?: Persona): void{
    const container = document.getElementById('mod');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = "none";
    button.setAttribute('data-toggle', 'modal');
  
    if (mode === 'edit') {
      this.updatePersona = persona;
      button.setAttribute('data-target', '#updatePersonanModal');
    }
  
  /*
  
    */
    container?.appendChild(button);
    button.click();
  }






}