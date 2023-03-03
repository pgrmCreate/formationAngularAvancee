import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
    selector: '[appTaskInput]'
})
export class TaskInputDirective {

    constructor(el: ElementRef) {
    }

    @HostListener('keyup', ['$event'])
    handleChangeTaskName(event: any) {
        if(event.target.value.length === 1) {
            event.target.value = `tâche : ${event.target.value}`
        }
    }
}
