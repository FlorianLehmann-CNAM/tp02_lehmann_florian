import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NoNumberDirective } from '../directives/noNumber.directive'
@NgModule({
  declarations: [NoNumberDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[NoNumberDirective]
})
export class CustomValidatorModule{}