import {ChangeDetectionStrategy, Component} from '@angular/core';
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
    inputUsername = '';
    inputPassword = '';
    isErrorAuth = false;

    constructor(private userService: UserService, private router: Router) {
    }

    tryLoggin() {
        this.userService.loggin(this.inputUsername, this.inputPassword).subscribe((isLogged: boolean) => {
            this.userService.isLogged = isLogged;
            this.isErrorAuth = !isLogged;

            if (isLogged) {
                this.router.navigate(['/']);
            }
        })
    }
}
