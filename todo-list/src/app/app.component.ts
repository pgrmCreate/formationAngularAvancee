import {Component} from '@angular/core';
import {TaskService} from "./task.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [TaskService]
})
export class AppComponent {
    todolist: Array<any> = [];

    constructor() {
        this.addTask('faire les courses');
        this.addTask('sortir le chien');
    }

    addTask(name = 'default task') {
        const targetId = this.todolist.length > 0 ? (this.todolist[(this.todolist.length - 1)].id + 1) : 0;

        this.todolist.push({
            id: targetId,
            name: name,
            isDone : false
        });
    }

    handleSetDone(targetTask: any) {
        targetTask.isDone = true;
    }

    deleteTask(targetId: number) {
        this.todolist = this.todolist.filter(i => i.id !== targetId);
    }
}
