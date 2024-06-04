import { Component } from '@angular/core';
import { Proveedor } from '../proveedores/proveedor.model';
import { ProveedoresService } from '../proveedores/proveedores.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-proveedores-usuarios',
  templateUrl: './proveedores-usuarios.component.html',
  styleUrls: ['./proveedores-usuarios.component.css']
})
export class ProveedoresUsuariosComponent {
  idFraccionamiento: number =0;
  proveedores: Proveedor[] = [];
  proveedores1: Proveedor[] = [];
  indice: number = 0;
  verdaderoRango: number = 6;
  cont: number = 1; 

  

  constructor(private ProveedoresService: ProveedoresService,private dataService:DataService) {}

  ngOnInit(): void {
    //MARIANA, QUI VA A IR EL ID DEL FRACCIONAMIENTO DEL TESORERO
    //OJOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
    this.idFraccionamiento = this.dataService.obtener_usuario(3);
    //MARIANA, QUI VA A IR EL ID DEL FRACCIONAMIENTO DEL TESORERO
    //OJOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
    this.cargarProveedores(this.idFraccionamiento);
  }
  cargarProveedores(idFraccionamiento: number): void {
    this.ProveedoresService.consultarProveedores(idFraccionamiento).subscribe(
      (data: Proveedor[]) => {
        this.proveedores = data;
        this.proveedores1 = this.proveedores.slice(this.indice, this.indice + this.verdaderoRango);
      },
      (error) => {
        console.error('Error al obtener proveedores:', error);
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
      this.proveedores1 = this.proveedores.slice(this.indice - this.verdaderoRango, this.indice);
      this.indice = this.indice - this.verdaderoRango;
      this.cont--;
    }
  }

  paginador_adelante() {
    if (this.proveedores.length - (this.indice + this.verdaderoRango) > 0) {
      this.indice = this.indice + this.verdaderoRango;
      this.proveedores1 = this.proveedores.slice(this.indice, this.indice + this.verdaderoRango);
      this.cont++;
     // this.consultarNotificacion
    }

  }

}
