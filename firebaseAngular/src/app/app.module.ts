import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireAuthModule} from '@angular/fire/compat/auth';
import {  provideAuth,getAuth} from '@angular/fire/auth';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { AngularFireModule} from '@angular/fire/compat'
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireAuthModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    AngularFireModule.initializeApp(environment.firebase)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
