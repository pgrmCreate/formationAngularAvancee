import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
    selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

    constructor(private el: ElementRef) {
        this.el.nativeElement.style.background = 'red';
    }

    @HostListener('click')
    handleClick() {
        this.el.nativeElement.style.background = 'green';
    }
}
