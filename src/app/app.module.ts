import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngresarGastoComponent } from './components/ingresar-gasto/ingresar-gasto.component';
import { ListaGastosComponent } from './components/lista-gastos/lista-gastos.component';
import { GastosComponent } from './pages/gastos/gastos.component';



@NgModule({
  declarations: [
    AppComponent,
    IngresarGastoComponent,
    ListaGastosComponent,
    GastosComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
