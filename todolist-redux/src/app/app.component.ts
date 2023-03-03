import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {addAction, initAction} from "./state/todo-actions";
import {of} from "rxjs";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    title = 'todolist-redux';

    constructor(private store:Store<any>) {
    }

    ngOnInit() {
        //this.store.dispatch(initAction());

        this.store.select('todoList').subscribe((data) => {
            console.log('change data', data);
        });
    }

    addTask() {
        this.store.dispatch(addAction({name: 'faire des trucs'}));
    }
}
