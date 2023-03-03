import {Component, EventEmitter, Output} from '@angular/core';
import {TaskService} from "../../../task.service";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
    @Output() eventNewTaskName: EventEmitter<string> = new EventEmitter();

    newTaskName = '';

    constructor(private taskService: TaskService) {

    }

    handleAddTask() {
        this.eventNewTaskName.emit(this.newTaskName);

        this.newTaskName = '';
    }

    getNewTaskName() {
        return this.newTaskName;
    }
}
