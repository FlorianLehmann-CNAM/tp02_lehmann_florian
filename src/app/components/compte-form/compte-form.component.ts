import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/User';
@Component({
  selector: 'app-compte-form',
  templateUrl: './compte-form.component.html',
  styleUrls: ['./compte-form.component.css']
})
export class CompteFormComponent implements OnInit {

  compteForm : FormGroup = this.fb.group({
    name : ['qsd', [Validators.required]],
    surname: ['qsd', [Validators.required]],
    address: ['qsd', [Validators.required]],
    postalCode: ['qsd', [Validators.required, Validators.maxLength(5)]],
    city: ['qsd', [Validators.required]],
    mobilePhone: ['qsd', [Validators.required]],
    mail : ['qsd', [Validators.required]],
    country: ['qsd', [Validators.required]],
    gender: [''],
    login: ['qsd', [Validators.required]],
    password: ['qsd', [Validators.required]],
    passwordConfirm: ['qsd', [Validators.required]]
  })

  constructor(private fb : FormBuilder) {
    
    
  }

  get name() {return this.compteForm.get('name'); }
  get surname() { return this.compteForm.get('surname');}
  get address() { return this.compteForm.get('address');}
  get postalCode() { return this.compteForm.get('postalCode'); }
  get city() { return this.compteForm.get('city');}
  get mobilePhone() {return this.compteForm.get('mobilePhone');}
  get mail() {return this.compteForm.get('mail');}
  get country() { return this.compteForm.get('country');}
  get gender() {return this.compteForm.get('gender');}
  get login() {return this.compteForm.get('login');}
  get password() {return this.compteForm.get('password');}
  get passwordConfirm() {return this.compteForm.get('passwordConfirm');}

  onSubmit() : void{

  }

  ngOnInit() {
  }

  test(){
    console.log(this.compteForm.value);
  }
  

}