import { Component } from '@angular/core';
import { Acuerdos } from '../acuerdos/acuerdos.model';
import { AcuerdosService } from '../acuerdos/acuerdos.service';
import { DataService } from '../data.service';
@Component({
  selector: 'app-acuerdos-usuarios',
  templateUrl: './acuerdos-usuarios.component.html',
  styleUrls: ['./acuerdos-usuarios.component.css']
})
export class AcuerdosUsuariosComponent {

  acuerdos: Acuerdos[] = []; 
  acuerdos1: Acuerdos[] = []; 
  indice: number = 0;
  verdaderoRango: number = 6;
  cont: number = 1;

  constructor(private acuerdosService: AcuerdosService,private dataService:DataService) {}

  ngOnInit(): void {
    this.consultarAcuerdos();
  }

  consultarAcuerdos(): void {
    this.acuerdosService.consultarAcuerdos(this.dataService.obtener_usuario(3)).subscribe(
      (data: Acuerdos[]) => {
        this.acuerdos = data;
        this.indice=0;
        this.verdaderoRango=6;
        this.acuerdos1 = this.acuerdos.slice(this.indice, this.indice + this.verdaderoRango);
      },
      (error) => {
        console.error('Error al obtener acuerdos:', error);
        // Manejo de errores
      }
    );
  }

  pageChanged(event: any) {
    // Determinar la acción del paginator
    if (event.previousPageIndex < event.pageIndex) {
      // Se avanzó a la siguiente página
      this.paginador_adelante();
    } else if (event.previousPageIndex > event.pageIndex) {
      // Se retrocedió a la página anterior
      this.paginador_atras();
    }
  }

  paginador_atras() {

    if (this.indice - this.verdaderoRango >= 0) {
      this.acuerdos1 = this.acuerdos.slice(this.indice - this.verdaderoRango, this.indice);
      this.indice = this.indice - this.verdaderoRango;
      this.cont--;
    }
  }

  paginador_adelante() {
    if (this.acuerdos.length - (this.indice + this.verdaderoRango) > 0) {
      this.indice = this.indice + this.verdaderoRango;
      this.acuerdos1 = this.acuerdos.slice(this.indice, this.indice + this.verdaderoRango);
      this.cont++;
     // this.consultarNotificacion
    } 
    
  }

}
