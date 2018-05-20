import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app.routing';
import { LayoutModule } from './layout/layout.module';
import { AppComponent } from './app.component';

import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';

import { FireBaseComponentsModule } from './shared/firebase.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    LayoutModule,
    AppRoutingModule,
    FireBaseComponentsModule,
    ReactiveFormsModule,
    environment['ngsw'] ? ServiceWorkerModule.register('./ngsw-worker.js') : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
