import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  public formulario! : FormGroup;

  constructor(
    public  formBuilder : FormBuilder,
    private auth      : AuthService,
  ) { }

  ionViewWillEnter(){
    this.formulario=this.formBuilder.group({
      username:['kminchelle'],
      password:['0lelplR'],
    })
  }
  public envio(){
    this.auth.auth({
      username : this.formulario.value['username'],
      password : this.formulario.value['password'],
    })
  }

}
