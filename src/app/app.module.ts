import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CompteFormComponent } from './components/compte-form/compte-form.component';
import { RecapComponent } from './components/recap/recap.component';
import { CommonModule } from '@angular/common';
import { CustomValidatorModule } from './modules/customValidatorModule';
import { MatchDirective } from './directives/Match.directive';
import { FormatPhonePipe } from './pipes/formatPhone.pipe';

@NgModule({
  imports:   [BrowserModule, FormsModule, ReactiveFormsModule, CommonModule, CustomValidatorModule],
  declarations: [ AppComponent, HeaderComponent, FooterComponent, CompteFormComponent, RecapComponent, MatchDirective,  FormatPhonePipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
