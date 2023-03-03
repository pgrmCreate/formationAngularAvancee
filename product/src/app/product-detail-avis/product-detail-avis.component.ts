import { Component } from '@angular/core';
import {ProductService} from "../product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-detail-avis',
  templateUrl: './product-detail-avis.component.html',
  styleUrls: ['./product-detail-avis.component.css']
})
export class ProductDetailAvisComponent {
    targetProduct? : any;

    constructor(private productService: ProductService, private activateRoute: ActivatedRoute) {
        activateRoute.parent?.params.subscribe((data: any) => {
            this.targetProduct = this.productService.getProduct().find(i => i.id.toString() === data.id);

            console.log(this.targetProduct)
        });
    }
}
