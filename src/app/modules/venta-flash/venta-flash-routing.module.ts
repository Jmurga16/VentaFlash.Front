import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerInsideComponent } from 'src/app/core/components/container-inside/container-inside.component';
import { ProductoComponent } from './components/producto/producto.component';
import { VentaFlashComponent } from './venta-flash.component';


const routes: Routes = [
    {
        path: '',
        component: ContainerInsideComponent,
        children: [
            {
                path: '',
                component: ProductoComponent
            },
        ],
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class VentaFlashRoutingModule { }
