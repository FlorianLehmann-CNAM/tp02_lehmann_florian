import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CompteFormComponent } from './components/compte-form/compte-form.component';
import { RecapComponent } from './components/recap/recap.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports:      [ BrowserModule, FormsModule, CommonModule],
  declarations: [ AppComponent, HeaderComponent, FooterComponent, CompteFormComponent, RecapComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
