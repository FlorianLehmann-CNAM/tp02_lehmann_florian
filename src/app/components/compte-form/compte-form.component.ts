import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/User';

@Component({
  selector: 'app-compte-form',
  templateUrl: './compte-form.component.html',
  styleUrls: ['./compte-form.component.css']
})
export class CompteFormComponent implements OnInit {

  @Output() onFormSubmit = new EventEmitter<User>();

  compteForm : FormGroup = this.fb.group({
    name : ['', [Validators.required, this.noNumberValidator]],
    surname: ['', [Validators.required, this.noNumberValidator]],
    address: ['', [Validators.required]],
    postalCode: ['', [Validators.required, Validators.maxLength(5)]],
    city: ['', [Validators.required, this.noNumberValidator]],
    mobilePhone: ['', [Validators.required, this.phoneValidator]],
    mail : ['', [Validators.required, this.emailValidator]],
    country: ['', [Validators.required, this.noNumberValidator]],
    gender: [''],
    login: ['', [Validators.required]],
    password: ['', [Validators.required]],
    passwordConfirm: ['', [Validators.required]]
  })

  constructor(private fb : FormBuilder) { }

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
    let user : User = new User(this.name.value, this.surname.value, this.address.value, this.postalCode.value, this.city.value, this.mobilePhone.value, this.mail.value, this.country.value, this.gender.value, this.login.value, this.password.value);

    this.onFormSubmit.emit(user);
  }

  ngOnInit() {
  }

  test(){
    console.log(this.compteForm.value);
  }
  

  // validators
  noNumberValidator(control: AbstractControl){
    const reg : RegExp = /[0-9]/
    if(!control.value)
      return null;

    return !reg.test(control.value) ? null : ({'number': true});
  }

  emailValidator(control: AbstractControl){
    const reg : RegExp = /[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+/
     
    if(!control.value)
      return null;

    return reg.test(control.value) ? null : ({'notAnEmailAddress': true});
  }

  phoneValidator(control: AbstractControl){
    const reg : RegExp = /[0-9]{10}/
    if(!control.value)
      return null;
    
    return reg.test(control.value) ? null : ({'notPhone' : true});
    
  }
}