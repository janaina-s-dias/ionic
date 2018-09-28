import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular'; 
import { TabsPage } from '../tabs/tabs';
import { CadastroPage } from '../cadastro/cadastro';


/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 //Tipos de navegaçao: public navCtrl: NavController, public navParams: NavParams, 


@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {

  public loginForm: any;
  messageEmail = ""
  messagePassword = "";
  errorEmail = false;
  errorPassword = false;
 
 
  constructor(public formBuilder: FormBuilder, public navCtrl: NavController) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(20),
      Validators.required])],
    });     
  }

  login(){
    let {email, password} = this.loginForm.controls;

    if(!this.loginForm.valid){
      if(!email.valid) {
        this.errorEmail = true;
        this.messageEmail = "Email inválido!";        
      } else {
        this.messageEmail = "";
      }

      if(!password.valid){
        this.errorPassword = true;
        this.messagePassword = "A senha precisa ter de 6 a 20 caracteres!";
      } else {
        this.messagePassword = "";
      }
    }

    else {
      alert("Login Realizado!");
      this.navCtrl.setRoot(TabsPage);
    }

  }

  cadastro(){
    //alert("Realizar cadastro!");
    this.navCtrl.setRoot(CadastroPage);
    
  }
}
