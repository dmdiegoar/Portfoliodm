import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Idiomas } from 'src/app/models/idiomas';
import { IdiomasService } from 'src/app/servicios/idiomas.service';
import {AuthService } from '../../servicios/auth.service'

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})
export class IdiomasComponent implements OnInit {

  public idiomas: Idiomas[]=[];
  public updateIdiomas:Idiomas | undefined;
  public deleteIdiomas:Idiomas;
  

  constructor(private idiomasService:IdiomasService, public authService: AuthService ) { }

  ngOnInit(): void {
    this.getIdiomas();
  }

  public getIdiomas():void {
    this.idiomasService.getIdiomas().subscribe({
      next:(response: Idiomas[]) => {
        this.idiomas = response;
      },
      error:(error: HttpErrorResponse) => {
        alert(error.message);
      }

      })
    }

    public onAddIdiomas(addForm: NgForm):void {
      document.getElementById('add-estudios-modal')?.click();
      this.idiomasService.addIdiomas(addForm.value).subscribe({
        next:(response: Idiomas) => {
          console.log(response);
          this.getIdiomas();
          addForm.reset();
        },
        error:(error: HttpErrorResponse) => {
          alert(error.message);
          addForm.reset();
        }

      })
    }
	
	 public onUpdateIdiomas(idiomas: Idiomas):void {
		  this.idiomasService.updateIdiomas(idiomas).subscribe({
			next:(response: Idiomas) => {
			console.log(response);
			this.getIdiomas();
			
		  },
		  error:(error: HttpErrorResponse) => {
			alert(error.message);
		  }
		  
		})
    }

  public onDeleteIdiomas(idIdioma: number):void {
    this.idiomasService.deleteIdiomas(idIdioma).subscribe({
			next:(response: void) => {
      console.log(response);
      this.getIdiomas();
      
    },
    error:(error: HttpErrorResponse) => {
      console.log(error.message);
    }
  })
  
}
	
	
	
	
	
	
	


    public onOpenModal(mode: string, idiomas?: Idiomas): void{
      const container = document.getElementById('ceroidioma');
      const button = document.createElement('button');
      button.type = 'button';
      button.style.display = 'none';
      button.setAttribute('data-toggle', 'modal');
      if (mode === 'add') {
        button.setAttribute('data-target', '#addIdiomasModal');
      }

      if (mode === 'edit') {
        this.updateIdiomas = idiomas;
        button.setAttribute('data-target', '#updateIdiomasModal');
      }
	  
	  
      if (mode === 'delete') {
        this.deleteIdiomas = idiomas;
        button.setAttribute('data-target', '#deleteIdiomasModal');
      }
	  /*
	  
      */
      container?.appendChild(button);
      button.click();
    }




    }
