import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddTaskComponent} from "./components/add-task/add-task.component";
import {FormsModule} from "@angular/forms";
import {TaskService} from "../task.service";
import { TaskInputDirective } from './task-input.directive';
import { MaxCharPipe } from './max-char.pipe';

@NgModule({
    declarations: [
        AddTaskComponent,
        TaskInputDirective,
        MaxCharPipe
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [TaskService],
    exports: [
        AddTaskComponent,
        MaxCharPipe
    ]
})
export class SharedModuleModule {
}
