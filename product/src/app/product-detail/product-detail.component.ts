import { Component } from '@angular/core';
import {ProductService} from "../product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
    targetProduct? : any;

    constructor(private productService: ProductService, private activateRoute: ActivatedRoute) {
        activateRoute.params.subscribe((data: any) => {
            this.targetProduct = this.productService.getProduct().find(i => i.id.toString() === data.id);
        });
    }


}
