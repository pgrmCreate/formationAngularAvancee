import {Injectable} from '@angular/core';
import {of} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    isLogged = false;

    constructor() {
    }

    loggin(username: string, password: string) {
        if(username === 'admin' && password === 'pass') {
            return of(true);
        } else {
            return of(false)
        }
    }
}
