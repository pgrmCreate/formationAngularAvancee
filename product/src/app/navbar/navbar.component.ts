import { Component } from '@angular/core';
import {UserService} from "../auth/user.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    constructor(public userService: UserService) {
    }
}
