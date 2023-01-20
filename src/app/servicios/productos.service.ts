import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductosResponse } from '../modelos/productos'

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private URL_PRODUCTO    =  'https://dummyjson.com/auth/products?skip=0';
  private datosProductos! : ProductosResponse ;

  constructor(
    private httpClient : HttpClient,
  ) {}

  public productos(token : string | undefined){
    this.httpClient.get(this.URL_PRODUCTO,{
      headers:{
        'content-type': 'application/json',
        'authorization': 'Bearer ' + token
      }
    }).subscribe(datos =>{
      this.datosProductos = datos as ProductosResponse;
    })
  }
  public obtenerDatosProducto(){
    return this.datosProductos;
  }
}
