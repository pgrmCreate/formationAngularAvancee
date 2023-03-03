import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    products = [{
        id: 0,
        name: 'lapin en plastique',
        body: 'super jouet pour noel',
        technicalSheet : 'matière peu commodable mais pas chère',
        avis : 'pas terrible ce lapin'
    },{
        id: 1,
        name: 'moteur de moto',
        body: 'seul, il est peu utile, il va falloir trouver autre chose',
        technicalSheet : 'une qualité irréprochable, matière en métal de dingue',
        avis : 'super moteur mais je ne sais pas quoi en faire'
    }]

    constructor() {
    }

    getProduct() {
        return this.products;
    }
}
