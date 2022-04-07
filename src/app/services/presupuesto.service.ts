import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Gasto } from '../interface/gasto.interface';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  presupuesto: number;
  restante: number;
  private gastos$ = new Subject<Gasto>();

  constructor() {
    this.presupuesto = 0;
    this.restante = 0;
   }

   getGatos(): Observable<Gasto>{
     return this.gastos$.asObservable();
   }


  agregarGasto(gasto: Gasto){
    this.restante = this.restante - gasto.cantidad;    
    this.gastos$.next(gasto);
  }
}
