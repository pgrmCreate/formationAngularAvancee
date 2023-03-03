import { Component } from '@angular/core';
import {ProductService} from "../product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-detail-tech',
  templateUrl: './product-detail-tech.component.html',
  styleUrls: ['./product-detail-tech.component.css']
})
export class ProductDetailTechComponent {
    targetProduct? : any;

    constructor(private productService: ProductService, private activateRoute: ActivatedRoute) {
        activateRoute.parent?.params.subscribe((data: any) => {
            this.targetProduct = this.productService.getProduct().find(i => i.id.toString() === data.id);

            console.log(this.targetProduct)
        });
    }
}
