import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Habilidades } from 'src/app/models/habilidades';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';
import {AuthService } from '../../servicios/auth.service'

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  public habilidades: Habilidades[]=[];
  public updateHabilidades:Habilidades | undefined;
  public deleteHabilidades:Habilidades;
  

  constructor(private habilidadesService:HabilidadesService, public authService: AuthService ) { }

  ngOnInit(): void {
    this.getHabilidades();
  }

  public getHabilidades():void {
    this.habilidadesService.getHabilidades().subscribe({
      next:(response: Habilidades[]) => {
        this.habilidades = response;
      },
      error:(error: HttpErrorResponse) => {
        alert(error.message);
      }

      })
    }

    public onAddHabilidades(addForm: NgForm):void {
      document.getElementById('add-estudios-modal')?.click();
      this.habilidadesService.addHabilidades(addForm.value).subscribe({
        next:(response: Habilidades) => {
          console.log(response);
          this.getHabilidades();
          addForm.reset();
        },
        error:(error: HttpErrorResponse) => {
          alert(error.message);
          addForm.reset();
        }

      })
    }
	
	 public onUpdateHabilidades(habilidades: Habilidades):void {
		  this.habilidadesService.updateHabilidades(habilidades).subscribe({
			next:(response: Habilidades) => {
			console.log(response);
			this.getHabilidades();
			
		  },
		  error:(error: HttpErrorResponse) => {
			alert(error.message);
		  }
		  
		})
    }

  public onDeleteHabilidades(idHab: number):void {
    this.habilidadesService.deleteHabilidades(idHab).subscribe({
			next:(response: void) => {
      console.log(response);
      this.getHabilidades();
      
    },
    error:(error: HttpErrorResponse) => {
      console.log(error.message);
    }
  })
  
}
	
	
	
	
	
	
	


    public onOpenModal(mode: string, habilidades?: Habilidades): void{
      const container = document.getElementById('cerohab');
      const button = document.createElement('button');
      button.type = 'button';
      button.style.display = 'none';
      button.setAttribute('data-toggle', 'modal');
      if (mode === 'add') {
        button.setAttribute('data-target', '#addHabilidadesModal');
      }

      if (mode === 'edit') {
        this.updateHabilidades = habilidades;
        button.setAttribute('data-target', '#updateHabilidadesModal');
      }
	  
	  
      if (mode === 'delete') {
        this.deleteHabilidades = habilidades;
        button.setAttribute('data-target', '#deleteHabilidadesModal');
      }
	  /*
	  
      */
      container?.appendChild(button);
      button.click();
    }




    }
