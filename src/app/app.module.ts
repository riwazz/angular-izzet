import { DosyalarComponent } from './components/dosyalar/dosyalar.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { environment } from './../environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { CKEditorModule } from 'ng2-ckeditor';
import { ToastrModule } from 'ngx-toastr';
import { AngularFireStorageModule } from '@angular/fire/storage';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DosyalarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CKEditorModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AngularFireStorageModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
