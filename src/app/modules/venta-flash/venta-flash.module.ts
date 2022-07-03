import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductoComponent } from './components/producto/producto.component';
import { ModalVentaComponent } from './components/modal/modal-venta/modal-venta.component';
import { VentaFlashComponent } from './venta-flash.component';
import { VentaFlashRoutingModule } from './venta-flash-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
    declarations: [
        VentaFlashComponent,
        ProductoComponent,
        ModalVentaComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        HttpClientModule,
        VentaFlashRoutingModule
        //MatFormFieldModule,      
    ],
})

export class VentaFlashModule { }
