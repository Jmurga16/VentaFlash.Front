import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrdenModel } from '../../../models/IOrdenModel';
import { VentaFlashService } from '../../../services/venta-flash.service';

@Component({
  selector: 'app-modal-venta',
  templateUrl: './modal-venta.component.html',
  styleUrls: ['./modal-venta.component.css']
})
export class ModalVentaComponent implements OnInit {

  formGroup: FormGroup;
  ordenModel: OrdenModel[] = []

  constructor(
    public dialogRef: MatDialogRef<ModalVentaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ventaFlashService: VentaFlashService,
    private formBuilder: FormBuilder,
  ) {

    this.formGroup = this.formBuilder.group({
      sNombre: "",
      sCorreo: "",
      sDireccion: "",
      nStockDisponible: ""
    });


  }

  ngOnInit(): void {

  }

  onSubmit() {

    /* if (this.fnValidateForm() == false) {
      return;
    } */

    let model = <OrdenModel>this.formGroup.value;
    this.ventaFlashService.setOrden(model).subscribe({
      next: (data) => {

        console.log(data)
        this.fnCloseModal(data);

      },
      error: (e) => console.error(e)
    });
    // return;
  }

  //#region Cerrar
  fnCloseModal(result: any) {
    //Indefinido solo cierra    
    if (result == undefined) {
      this.dialogRef.close();
    }
    //1 Inserta
    else {
      this.dialogRef.close(result);
    }
  }
  //#endregion

}
