import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngresarGastoComponent } from './components/ingresar-gasto/ingresar-gasto.component';
import { ListaGastosComponent } from './components/lista-gastos/lista-gastos.component';
import { GastosComponent } from './pages/gastos/gastos.component';
import { IngresarPresupuestoComponent } from './pages/ingresar-presupuesto/ingresar-presupuesto.component';



@NgModule({
  declarations: [
    AppComponent,
    IngresarGastoComponent,
    ListaGastosComponent,
    GastosComponent,
    IngresarPresupuestoComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
