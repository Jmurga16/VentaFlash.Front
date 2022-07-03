
export class ProductoModel {
    nIdProducto: number;
    sNombreProducto: string;
    sDescripcion: string;
    nPrecio: number;
    nStock: number;
    nCalificacion: number;

    constructor(nIdProducto: number, sNombreProducto: string, sDescripcion: string, nPrecio: number, nStock: number, nCalificacion: number) {
        this.nIdProducto = nIdProducto
        this.sNombreProducto = sNombreProducto
        this.sDescripcion = sDescripcion
        this.nPrecio = nPrecio
        this.nStock = nStock
        this.nCalificacion = nCalificacion
    }
}

