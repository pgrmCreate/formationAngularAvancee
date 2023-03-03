import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { MyDirectiveDirective } from './my-directive.directive';
import {SharedModuleModule} from "./sharedModule/shared-module.module";

@NgModule({
  declarations: [
    AppComponent,
    MyDirectiveDirective
  ],
    imports: [
        BrowserModule,
        SharedModuleModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
