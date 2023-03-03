import {ChangeDetectionStrategy, Component, DoCheck, Input, OnChanges, OnInit} from '@angular/core';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForgotPasswordComponent implements OnInit, DoCheck, OnChanges{
    @Input('username') username: string = '';

    constructor() {
    }

    ngOnInit() {
        console.log('init')
    }

    ngDoCheck() {
        console.log('new render')
    }

    ngOnChanges() {
        console.log('on change')
    }
}
