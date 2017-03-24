import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule , AuthProviders, AuthMethods } from 'angularfire2';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import appRoutes from "./app.routes";

import 'hammerjs';
import { LoginComponent } from './login/login.component';

// import { FileuploadComponent } from './fileupload/fileupload.component';
// import { FileUploadModule } from 'ng2-file-upload';
import { CmsTextComponent } from './cms-text/cms-text.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


// Must export the config
export const firebaseConfig = {
 apiKey: "AIzaSyDqh7Sf59JjHgjbaRjjrZJFsArneWiuAHc",
    authDomain: "bioclean-7a0fa.firebaseapp.com",
    databaseURL: "https://bioclean-7a0fa.firebaseio.com",
    storageBucket: "bioclean-7a0fa.appspot.com",
    messagingSenderId: "1046463203036"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // FileuploadComponent,
    CmsTextComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    appRoutes,
    AngularFireModule.initializeApp(firebaseConfig,myFirebaseAuthConfig),
    // FileUploadModule,
    MaterialModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ AuthGuard,AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
