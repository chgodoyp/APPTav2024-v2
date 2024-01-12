import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UsingLocalstorageService } from '../../services/using-localstorage.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-recover-pass',
  templateUrl: './recover-pass.page.html',
  styleUrls: ['./recover-pass.page.scss'],
})
export class RecoverPage implements OnInit {

  credentials!: FormGroup;

  isNotHome = false;

  passPattern = "^(.{0,7}|[^0-9]*|[^a-z]*)$";

  constructor(
    private router: Router,
    private _localStorage: UsingLocalstorageService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.createForm();
  }

  get email(){
    return this.credentials?.get('username');
  }



  createForm(){
    this.credentials = this.formBuilder.group({
      'username':[null,Validators.required],

    });
  }


  async login(){

    this.alertPresent('Recuperar clave','Correo de recuperación enviado');
    this.router.navigateByUrl('/login');



  }

  async alertPresent(header:string,message:string){
    const alert = await this.alertCtrl.create({
      header:header,
      message:message,
      buttons:['OK'],
    });
    alert.present();
  }

}
