import {Component, NgZone, OnInit} from '@angular/core';
import {setTypeScriptVersionForTesting} from "@angular/compiler-cli/src/typescript_support";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    progressValue = 0;

    constructor(private ngZone: NgZone) {
    }

    ngOnInit() {

    }

    incrementInZone() {
        if(this.progressValue > 0)
            return

        const counterProgress = setInterval(() => {
            this.progressValue++;

            if(this.progressValue >= 100) {
                clearInterval(counterProgress);
                this.reset();
            }
        }, 30)
    }

    incrementOutZone() {
        if(this.progressValue > 0)
            return

        this.ngZone.runOutsideAngular(() => {
            const counterProgress = setInterval(() => {
                this.progressValue++;

                if(this.progressValue >= 100) {
                    clearInterval(counterProgress);
                    this.ngZone.run(() => {
                        this.reset();
                    })
                }
            }, 30)
        })
    }

    reset() {
        setTimeout(() => {
            this.progressValue = 0;
        }, 3000)
    }
}
