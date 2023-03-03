import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {ProductDetailAvisComponent} from "./product-detail-avis/product-detail-avis.component";
import {ProductDetailTechComponent} from "./product-detail-tech/product-detail-tech.component";
import {AuthGuard} from "./auth/auth.guard";

const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'product/:id',
        component: ProductDetailComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'avis',
                component: ProductDetailAvisComponent,
                outlet: 'aux'
            },{
                path: 'technical',
                component: ProductDetailTechComponent,
                outlet: 'aux'
            }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
