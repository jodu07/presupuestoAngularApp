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
  subscription: Subscription;

  constructor(private _presupuestoService: PresupuestoService) { 
    this.presupuesto = 0;
    this.restante = 0;

    this.subscription = this._presupuestoService.getGatos()
    .subscribe( data => {
      console.log(data);
      this.restante = this.restante - data.cantidad;
      this.listaGastos.push(data);
    });
  }

  aplicarColorRestante(){
    if(this.presupuesto / 4 > this.restante){
      return 'alert alert-danger';
    }else if(this.presupuesto / 2 > this.restante){
      return 'alert alert-warning';
    }else{
      return 'alert alert-secondary';
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.presupuesto = this._presupuestoService.presupuesto;
    this.restante = this._presupuestoService.restante
  }

}
