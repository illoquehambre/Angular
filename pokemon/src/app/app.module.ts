import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialImportsModule } from './material-imports/material-imports.module';
import { FormsModule } from '@angular/forms';
import { ListadoComponent } from './listado/listado.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonDialogoComponent } from './dialogos/pokemon-dialogo/pokemon-dialogo.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    PokemonDialogoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    FormsModule,
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
