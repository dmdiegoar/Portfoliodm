import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import {AuthService } from '../../servicios/auth.service'

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  public experiencia: Experiencia[]=[];
  public updateExperiencia:Experiencia | undefined;
  public deleteExperiencia:Experiencia;
  

  constructor(private experienciaService:ExperienciaService, public authService: AuthService ) { }

  ngOnInit(): void {
    this.getExperiencia();
  }

  public getExperiencia():void {
    this.experienciaService.getExperiencia().subscribe({
      next:(response: Experiencia[]) => {
        this.experiencia = response;
      },
      error:(error: HttpErrorResponse) => {
        alert(error.message);
      }

      })
    }

    public onAddExperiencia(addForm: NgForm):void {
      document.getElementById('add-estudios-modal')?.click();
      this.experienciaService.addExperiencia(addForm.value).subscribe({
        next:(response: Experiencia) => {
          console.log(response);
          this.getExperiencia();
          addForm.reset();
        },
        error:(error: HttpErrorResponse) => {
          alert(error.message);
          addForm.reset();
        }

      })
    }
	
	 public onUpdateExperiencia(experiencia: Experiencia):void {
		  this.experienciaService.updateExperiencia(experiencia).subscribe({
			next:(response: Experiencia) => {
			console.log(response);
			this.getExperiencia();
			
		  },
		  error:(error: HttpErrorResponse) => {
			alert(error.message);
		  }
		  
		})
    }

  public onDeleteExperiencia(idProy: number):void {
    this.experienciaService.deleteExperiencia(idProy).subscribe({
			next:(response: void) => {
      console.log(response);
      this.getExperiencia();
      
    },
    error:(error: HttpErrorResponse) => {
      console.log(error.message);
    }
  })
  
}
	
	
	
	
	
	
	


    public onOpenModal(mode: string, experiencia?: Experiencia): void{
      const container = document.getElementById('ceroexp');
      const button = document.createElement('button');
      button.type = 'button';
      button.style.display = 'none';
      button.setAttribute('data-toggle', 'modal');
      if (mode === 'add') {
        button.setAttribute('data-target', '#addExperienciaModal');
      }

      if (mode === 'edit') {
        this.updateExperiencia = experiencia;
        button.setAttribute('data-target', '#updateExperienciaModal');
      }
	  
	  
      if (mode === 'delete') {
        this.deleteExperiencia = experiencia;
        button.setAttribute('data-target', '#deleteExperienciaModal');
      }
	  /*
	  
      */
      container?.appendChild(button);
      button.click();
    }




    }
