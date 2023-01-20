import { Injectable } from '@angular/core';
import { Auth , AuthResponse} from './../modelos/auth';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL_LOGIN = 'https://dummyjson.com/auth/login';
  private datosUsuario ! : AuthResponse | null;
  private cargando : Boolean = false;
  private token : string | undefined = '';
  private usuarioCargado : Boolean = false ;
  constructor(
    private httpClient : HttpClient,
    private router     : Router,
    private alerta     : AlertController,
  ) {}

  public auth({username,password}:Auth){
    this.cargando = true;
    this.httpClient.post<AuthResponse>(
      this.URL_LOGIN,{
        username,
        password,
      },{
        headers : {'content-type':'application/json'}
      }).subscribe(async (datos)=>{
        this.datosUsuario = datos;
        this.token        = this.datosUsuario?.token;
        if(datos){
          const  alerta = await this.alerta.create({
            header  : 'Autenticacion correcta',
            buttons: [{ text: 'Aceptar',
                        role: 'confirm'}]
          });
          await alerta.present();
          console.log(this.datosUsuario)
          this.usuarioCargado = true;
          this.router.navigate(['/perfil'])
        }
      })
  }
  public obtenerToken(){
    return this.token;
  }
  public obtenerDatosUSuario(){
    return this.datosUsuario;
  }
  public obtenerUsuarioCargado(){
    return this.usuarioCargado;
  }
  public obtenerCargando(){
    return this.cargando;
  }
}


