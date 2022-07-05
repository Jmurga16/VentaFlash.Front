import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { ProductoModel } from '../../models/IProductoModel';
import { VentaFlashService } from '../../services/venta-flash.service';
import { ModalVentaComponent } from '../modal/modal-venta/modal-venta.component';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  producto: ProductoModel[] = []
  listDescription: any

  nIdProducto: number = 0
  sNombreProducto: string = ""
  nPrecio: number = 0
  nStock: number = 0
  nCalificacion: number = 0

  constructor(
    private ventaFlashService: VentaFlashService,
    public dialog: MatDialog,
    private spinner: NgxSpinnerService
  ) {

  }

  ngOnInit(): void {
    this.spinner.show();
    this.fnGetProduct();
    
  }

  //#region Obtener Producto en Oferta Flash
  fnGetProduct() {
    this.ventaFlashService.getProduct().subscribe((success) => {

      this.producto = success
      //console.log(this.producto)

      this.nIdProducto = success[0].nIdProducto
      this.sNombreProducto = success[0].sNombreProducto
      this.nPrecio = success[0].nPrecio
      this.nStock = success[0].nStock
      this.nCalificacion = success[0].nCalificacion


      this.listDescription = success[0].sDescripcion.split(';')

      this.spinner.hide()
    });
  }
  //#endregion


  //#region Abrir Modal Formulario
  fnOpenModalBuyNow() {

    const dialogRef = this.dialog.open(ModalVentaComponent, {
      width: '40rem',
      disableClose: true,
      data: {
        nIdProducto: this.nIdProducto
      },
    });

    dialogRef.afterClosed().subscribe((result) => {

      //Resultado despues de cerrar modal
      if (result !== undefined) {
        //this.spinner.show();

        setTimeout(() => {
          this.spinner.hide();
          //Compra exitosa
          if (result >= 0) {
            Swal.fire({
              title: `Reserva OK`,
              icon: 'success',
              timer: 6500
            });
          }
          //Sin Stock
          else if (result < 0) {
            Swal.fire({
              title: `Sin Stock`,
              icon: 'warning',
              timer: 6500
            });
          }
        }, 2000);

      }
    });
  }
  //#endregion


}
