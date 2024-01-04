import { Directive, ElementRef, EventEmitter, Output, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[appInput]'
})
export class InputDirective {

  render = inject(Renderer2)
  el = inject(ElementRef)



  constructor() {

  }

}
