import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css']
})
export class RecapComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {
    
  }

}