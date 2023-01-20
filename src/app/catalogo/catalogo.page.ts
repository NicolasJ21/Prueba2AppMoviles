import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { ProductosResponse } from '../modelos/productos'
import { ProductoService } from '../servicios/productos.service'

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage {

  private token : string | undefined = '';
  public  datosProducto! : ProductosResponse;
  constructor(
    private producto : ProductoService,
    private auth     : AuthService,
  ) {}


  ionViewWillEnter(){
    this.token = this.auth.obtenerToken();
    this.producto.productos(this.token);




  }
  ionViewDidEnter(){
    this.datosProducto = this.producto.obtenerDatosProducto();
  }



}
