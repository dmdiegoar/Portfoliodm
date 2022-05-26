import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import {AuthService } from '../../servicios/auth.service'

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  public educacion: Educacion[]=[];
  public updateEducacion:Educacion | undefined;
  public deleteEducacion:Educacion;
  

  constructor(private educacionService:EducacionService, public authService: AuthService ) { }

  ngOnInit(): void {
    this.getEducacion();
  }

  public getEducacion():void {
    this.educacionService.getEducacion().subscribe({
      next:(response: Educacion[]) => {
        this.educacion = response;
      },
      error:(error: HttpErrorResponse) => {
        alert(error.message);
      }

      })
    }

    public onAddEducacion(addForm: NgForm):void {
      document.getElementById('add-estudios-modal')?.click();
      this.educacionService.addEducacion(addForm.value).subscribe({
        next:(response: Educacion) => {
          console.log(response);
          this.getEducacion();
          addForm.reset();
        },
        error:(error: HttpErrorResponse) => {
          alert(error.message);
          addForm.reset();
        }

      })
    }
	
	 public onUpdateEducacion(educacion: Educacion):void {
		  this.educacionService.updateEducacion(educacion).subscribe({
			next:(response: Educacion) => {
			console.log(response);
			this.getEducacion();
			
		  },
		  error:(error: HttpErrorResponse) => {
			alert(error.message);
		  }
		  
		})
    }

  public onDeleteEducacion(idEdu: number):void {
    this.educacionService.deleteEducacion(idEdu).subscribe({
			next:(response: void) => {
      console.log(response);
      this.getEducacion();
      
    },
    error:(error: HttpErrorResponse) => {
      console.log(error.message);
    }
  })
  
}
	
	
	
	
	
	
	


    public onOpenModal(mode: string, educacion?: Educacion): void{
      const container = document.getElementById('cero');
      const button = document.createElement('button');
      button.type = 'button';
      button.style.display = 'none';
      button.setAttribute('data-toggle', 'modal');
      if (mode === 'add') {
        button.setAttribute('data-target', '#addEducacionModal');
      }

      if (mode === 'edit') {
        this.updateEducacion = educacion;
        button.setAttribute('data-target', '#updateEducacionModal');
      }
	  
	  
      if (mode === 'delete') {
        this.deleteEducacion = educacion;
        button.setAttribute('data-target', '#deleteEducacionModal');
      }
	  /*
	  
      */
      container?.appendChild(button);
      button.click();
    }




    }
