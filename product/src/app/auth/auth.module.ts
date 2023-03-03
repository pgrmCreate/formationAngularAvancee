import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {FormsModule} from "@angular/forms";
import {AuthRoutingModule} from "./auth-routing.module";
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";


@NgModule({
    declarations: [
        LoginComponent,
        ForgotPasswordComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        AuthRoutingModule
    ]
})
export class AuthModule {
}
