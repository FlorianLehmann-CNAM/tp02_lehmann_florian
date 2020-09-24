import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/User';

@Component({
  selector: 'app-compte-form',
  templateUrl: './compte-form.component.html',
  styleUrls: ['./compte-form.component.css']
})
export class CompteFormComponent implements OnInit {

  user : User;

  constructor() {
    this.user = new User();
    
  }

  onSubmit() : void{

  }

  ngOnInit() {
  }

  

}