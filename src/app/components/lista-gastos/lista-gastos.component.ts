import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PresupuestoService } from '../../services/presupuesto.service';

@Component({
  selector: 'app-lista-gastos',
  templateUrl: './lista-gastos.component.html',
  styleUrls: ['./lista-gastos.component.css']
})
export class ListaGastosComponent implements OnInit {

  listaGastos:any[]=[];
  presupuesto: number;
  restante: number;
  subscripcion: Subscription;

  constructor(private _presupuestoService: PresupuestoService) { 
    this.presupuesto = 0;
    this.restante = 0;

    this.subscripcion = this._presupuestoService


  }




  aplicarColorRestante(){

  }












  ngOnInit(): void {

    this.presupuesto = this._presupuestoService.presupuesto;
    this.restante = this._presupuestoService.restante
  }

}
