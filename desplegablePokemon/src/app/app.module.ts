import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListadoComponent } from './components/listado/listado.component';
import { MaterialImportsModule } from './modules/material-imports.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
