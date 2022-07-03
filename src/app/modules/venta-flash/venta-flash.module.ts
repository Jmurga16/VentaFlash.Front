import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProductoComponent } from './components/producto/producto.component';
import { ModalVentaComponent } from './components/modal/modal-venta/modal-venta.component';
import { VentaFlashComponent } from './venta-flash.component';
import { VentaFlashRoutingModule } from './venta-flash-routing.module';
import { AppMaterialModule } from 'src/app/shared/material/app-material.module';


@NgModule({
    declarations: [
        VentaFlashComponent,
        ProductoComponent,
        ModalVentaComponent
    ],
    imports: [
        AppMaterialModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        VentaFlashRoutingModule,

    ],
})

export class VentaFlashModule { }
