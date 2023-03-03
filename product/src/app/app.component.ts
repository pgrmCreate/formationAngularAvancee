import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ProductService} from "./product.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    title = 'product';

    constructor(private productService : ProductService) {
    }

    getProduct() {
        return this.productService.getProduct();
    }
}
