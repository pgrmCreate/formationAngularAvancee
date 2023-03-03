import {Component, NgZone, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    articleList : any[] = [];
    messages: any = [];

    constructor(private http: HttpClient, private ngZone: NgZone) {
        this.makeRequest();
    }


    pushMessage(targetMessage : any) {
        this.messages.push(targetMessage);
    }

    makeRequest() {
        this.ngZone.runOutsideAngular(() => {
            this.http.get('https://jsonplaceholder.typicode.com/posts')
                .subscribe((data: any) => {
                    this.articleList = data;

                    setTimeout(() => {
                        this.ngZone.run(() => {})
                    }, 3000);
                })
        })
    }

    ngOnInit() {
    }
}
