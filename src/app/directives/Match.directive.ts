import { Directive, Input } from "@angular/core";


@Directive({
  selector: '[appMatch]'
})
export class MatchDirective{

  constructor(){}

  @Input() set appMatch(value: string){
    console.log(value);
  }
}