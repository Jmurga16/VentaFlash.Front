import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
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
  bBtnSubmit: boolean = true;

  constructor(
    public dialogRef: MatDialogRef<ModalVentaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ventaFlashService: VentaFlashService,
    private formBuilder: FormBuilder,
  ) {

    this.formGroup = this.formBuilder.group({
      nIdProducto: "",
      sNombre: ["", [Validators.required]],
      sCorreo: ["", [Validators.required, Validators.email]],
      sDireccion: ["", [Validators.required]]
    });


  }

  ngOnInit(): void {

    this.formGroup.controls['nIdProducto'].setValue(this.data.nIdProducto)

  }

  //#region Comprar
  onSubmit() {

    if (this.fnValidateForm() == false) {
      return;
    }

    if (this.bBtnSubmit) {

      this.bBtnSubmit = false;

      let model = <OrdenModel>this.formGroup.value;
      this.ventaFlashService.setOrden(model).subscribe({
        next: (data) => {

          console.log('Stock: ' + data)
          this.fnCloseModal(data);
          this.bBtnSubmit = true;

        },
        error: (e) => console.error(e)
      });
    }

  }
  //#endregion


  //#region Validar Campos
  fnValidateForm() {

    if (!this.formGroup.valid) {

      Swal.fire({
        title: 'Complete los campos requeridos correctamente.',
        icon: 'error',
        timer: 3500
      })
      return false
    }
    else {

      return true
    }

  }
  //#endregion


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
