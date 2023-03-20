import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {environment} from "../environments/environment";
import {getFirestore, provideFirestore} from "@angular/fire/firestore";
import {getAuth, provideAuth} from "@angular/fire/auth";
import {getStorage, provideStorage} from "@angular/fire/storage";
import {PUBLIC_GLOBAL_RX_STATE, PublicGlobalState} from "./core/states/PublicGlobalState";
import {RxState} from "@rx-angular/state";
import {ADMIN_GLOBAL_RX_STATE, AdminGlobalState} from "./core/states/AdminGlobalState";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [
    {
      provide: PUBLIC_GLOBAL_RX_STATE, useFactory: () => new RxState<PublicGlobalState>()
    },
    {
      provide: ADMIN_GLOBAL_RX_STATE, useFactory: () => new RxState<AdminGlobalState>()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
