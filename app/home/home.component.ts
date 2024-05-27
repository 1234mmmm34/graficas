import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { graficas } from '../modelos/deudas';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private http: HttpClient, private dataService: DataService){}

  httpclient: any;
  graficas: graficas[] = [];
  title = 'angular17ssrapp';
  chart: any;
  semanaDelMes: any;
  graficas1: any;

 
  ngOnInit(){

    this.graficas1 =  this.fetchCuentasPorCobrar();
    console.log("caca: 3",this.graficas1)


    

    
  }



  semana(){
    const fechaActual = new Date();
    const primerDiaDelMes = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 1);
    const diaDeLaSemana = primerDiaDelMes.getDay();
    const primerSemana = Math.ceil((1 + 6 - diaDeLaSemana) / 7);
    const semanaActual = Math.ceil((fechaActual.getDate() + diaDeLaSemana) / 7);
    this.semanaDelMes = semanaActual - primerSemana - 1;
    return this.semanaDelMes
  }


  chartOptions = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2",
    title: {
      text: "Flujo de personas dentro de la comunidad (semana "+this.semana()+")",
      fontSize: 16,
      fontFamily: "tahoma",
      fontWeight: "lighter"
    },
    axisX: {
      valueFormatString: "D MMM"
    },
    axisY: {
      title: "Número de usuarios",
    },
    toolTip: {
      shared: true
    },
    legend: {
      cursor: "pointer",
      itemclick: function (e: any) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
          e.dataSeries.visible = false;
        } else {
          e.dataSeries.visible = true;
        }
        e.chart.render();
      }
    },
    data: [{
      type: "line",
      showInLegend: true,
      name: "Miembros",
      xValueFormatString: "MMM DD, YYYY",
      dataPoints: [
        { x: new Date(2021, 8, 1), y: 63 },
        { x: new Date(2021, 8, 2), y: 69 },
        { x: new Date(2021, 8, 3), y: 65 },
        { x: new Date(2021, 8, 4), y: 70 },
        { x: new Date(2021, 8, 5), y: 71 },
        { x: new Date(2021, 8, 6), y: 65 },
        { x: new Date(2021, 8, 7), y: 73 },
        { x: new Date(2021, 8, 8), y: 86 },
        { x: new Date(2021, 8, 9), y: 74 },
        { x: new Date(2021, 8, 10), y: 75 },
        { x: new Date(2021, 8, 11), y: 76 },
        { x: new Date(2021, 8, 12), y: 84 },
        { x: new Date(2021, 8, 13), y: 87 },
        { x: new Date(2021, 8, 14), y: 76 },
        { x: new Date(2021, 8, 15), y: 79 }
      ]
    }, {
      type: "line",
      showInLegend: true,
      name: "Invitados",
      dataPoints: [
        { x: new Date(2021, 8, 1), y: 60 },
        { x: new Date(2021, 8, 2), y: 57 },
        { x: new Date(2021, 8, 3), y: 51 },
        { x: new Date(2021, 8, 4), y: 56 },
        { x: new Date(2021, 8, 5), y: 54 },
        { x: new Date(2021, 8, 6), y: 55 },
        { x: new Date(2021, 8, 7), y: 54 },
        { x: new Date(2021, 8, 8), y: 69 },
        { x: new Date(2021, 8, 9), y: 65 },
        { x: new Date(2021, 8, 10), y: 66 },
        { x: new Date(2021, 8, 11), y: 63 },
        { x: new Date(2021, 8, 12), y: 67 },
        { x: new Date(2021, 8, 13), y: 66 },
        { x: new Date(2021, 8, 14), y: 56 },
        { x: new Date(2021, 8, 15), y: 64 }
      ]
    }]
  }

  
  chartOptions1 = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2",
    title: {
      text: "Número de deudores (semana "+this.semana()+")",
      fontSize: 16,
      fontFamily: "tahoma",
      fontWeight: "lighter",
    },
    axisX: {
      valueFormatString: "D MMM"
    },
    axisY: {
      title: "Número de deudores",
    },
    toolTip: {
      shared: true
    },
    legend: {
      cursor: "pointer",
      itemclick: function (e: any) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
          e.dataSeries.visible = false;
        } else {
          e.dataSeries.visible = true;
        }
        e.chart.render();
      }
    },
    data: [{
      type: "line",
      showInLegend: true,
      name: "Este mes",
      xValueFormatString: "MMM DD, YYYY",
      dataPoints: [
        { x: new Date(2021, 8, 1), y: 63 },
        { x: new Date(2021, 8, 2), y: 69 },
        { x: new Date(2021, 8, 3), y: 65 },
        { x: new Date(2021, 8, 4), y: 70 },
        { x: new Date(2021, 8, 5), y: 71 },
        { x: new Date(2021, 8, 6), y: 65 },
        { x: new Date(2021, 8, 7), y: 73 },
        { x: new Date(2021, 8, 8), y: 86 },
        { x: new Date(2021, 8, 9), y: 74 },
        { x: new Date(2021, 8, 10), y: 75 },
        { x: new Date(2021, 8, 11), y: 76 },
        { x: new Date(2021, 8, 12), y: 84 },
        { x: new Date(2021, 8, 13), y: 87 },
        { x: new Date(2021, 8, 14), y: 76 },
        { x: new Date(2021, 8, 15), y: 79 }
      ]
    }, {
      type: "line",
      showInLegend: true,
      name: "Mes pasado",
      dataPoints: [
        { x: new Date(2021, 8, 1), y: 60 },
        { x: new Date(2021, 8, 2), y: 57 },
        { x: new Date(2021, 8, 3), y: 51 },
        { x: new Date(2021, 8, 4), y: 56 },
        { x: new Date(2021, 8, 5), y: 54 },
        { x: new Date(2021, 8, 6), y: 55 },
        { x: new Date(2021, 8, 7), y: 54 },
        { x: new Date(2021, 8, 8), y: 69 },
        { x: new Date(2021, 8, 9), y: 65 },
        { x: new Date(2021, 8, 10), y: 66 },
        { x: new Date(2021, 8, 11), y: 63 },
        { x: new Date(2021, 8, 12), y: 67 },
        { x: new Date(2021, 8, 13), y: 66 },
        { x: new Date(2021, 8, 14), y: 56 },
        { x: new Date(2021, 8, 15), y: 64 }
      ]
    }]
  }



  chartOptions2 = {
   
		animationEnabled: true,
		exportEnabled: true,
		title:{
			text: "Desglose de ingresos y egresos (mensual)",
      fontSize: 20,
      fontFamily: "tahoma"   
		},
    /*
    axisX:{
			title: "Rooms"
		},
    */
		axisY:{
			title: "Porcentaje"
		},
		toolTip:  {
			shared: true
		},
		legend: {
			horizontalAlign: "right",
			verticalAlign: "center",
			reversed: true        
		},
		data: [{
      
			type: "stackedColumn100",
			name: "Fijos",
			showInLegend: "true",
			indexLabel: "#percent %",
			indexLabelPlacement: "inside",
			indexLabelFontColor: "white",
      color: "#25A0BE",
			dataPoints: [
				{  y: 20, label: "Ingresos" },
				{  y: 15, label: "Egresos"}
			]
		}, {
			type: "stackedColumn100",
			name: "Variables",
			showInLegend: "true",
			indexLabel: "#percent %",
			indexLabelPlacement: "inside",
			indexLabelFontColor: "white",
      color: "#8A5A9E",
			dataPoints: [
				{  y: 15, label: "Ingresos" },
				{  y: 25, label: "Egresos"}
			]
		}]
	}	



  
  fetchCuentasPorCobrar() {

     

    this.dataService.consultarDeudasPorCobrar().subscribe((graficas: graficas[]) => {
      console.log(graficas);
      return graficas
      
     /*
      this.graficas = graficas;
      const graficas1 = this.graficas[0].novariables
      console.log("caca: 2",graficas1)
      return graficas1
      */
    });

  } 
  

}
