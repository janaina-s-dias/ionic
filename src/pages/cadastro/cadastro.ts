import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  public loginForm: any;
   messageEmail = ""
   messagePassword = "";
   errorEmail = false;
   errorPassword = false;
  
  
   constructor(public formBuilder: FormBuilder, public navCtrl: NavController) {
    this.loginForm = formBuilder.group({
    //    nomeCompleto: ['', Validators.required],
    //    email: ['', Validators.required],
    //    password: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(20),
    //    Validators.required])],
    //  });
  });     
  }

   finalizado(){
    //alert("CadastroRealizado!");
    this.navCtrl.setRoot(TabsPage);
    
  }

}
