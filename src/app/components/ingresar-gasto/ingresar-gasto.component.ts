import { Component, OnInit } from '@angular/core';
import { Gasto } from 'src/app/interface/gasto.interface';
import { PresupuestoService } from '../../services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent implements OnInit {


  gasto: Gasto={
    nombre : '',
    cantidad : 0

  }

 
  formularioIncorrecto: boolean;
  textIncorrecto: string;

  constructor(private _presupuestoService: PresupuestoService) {
    
    this.formularioIncorrecto = false;
    this.textIncorrecto = '';
   }

  ngOnInit(): void {
  }

  agregarGasto(){
    if(this.gasto.cantidad > this._presupuestoService.restante){
      this.formularioIncorrecto = true;
      this.textIncorrecto = 'Cantidad ingresada es mayor al restante';
      return;
    }

    if(this.gasto.nombre === '' || this.gasto.cantidad <= 0){
      this.formularioIncorrecto = true;
      this.textIncorrecto = 'Nombre gasto o cantidad incorrecta';
    }else{

      //creamos el objeto con el nombre gasto y la cantidad

      const GASTO: Gasto = {
        nombre: this.gasto.nombre,
        cantidad: this.gasto.cantidad
      }


      //enviamos el objeto a los usuarios suscriptores via subjet

      this._presupuestoService.agregarGasto(GASTO);


      //reseteamos formulario
      this.formularioIncorrecto = false;
      this.gasto.nombre = '';
      this.gasto.cantidad = 0;
    }
  }

}
