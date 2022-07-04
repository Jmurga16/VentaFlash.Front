import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OrdenModel } from '../models/IOrdenModel';
import { ProductoModel } from '../models/IProductoModel';

@Injectable({
  providedIn: 'root'
})

export class VentaFlashService {

  url: string = environment.apiUrlV2

  constructor(private http: HttpClient) { }

  //#region Obtener Producto
  getProduct(): Observable<ProductoModel[]> {
    return this.http.get<ProductoModel[]>(this.url + '/Product');
  }
  //#endregion

  
  //#region Guardar Orden 
  setOrden(orden: OrdenModel): Observable<any> {
    return this.http.post(this.url + "/Order",orden);
  }
  //#endregion

}
