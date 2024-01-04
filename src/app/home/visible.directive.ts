import {
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
  Renderer2,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appVisible]',
})
export class VisibleDirective {
  render = inject(Renderer2);
  el = inject(ElementRef);

  _status = ''

  constructor() {}

  @HostListener('keydown', ['$event']) asd(event: KeyboardEvent){
    console.log(event)
    if (event.keyCode === 27) {
      this.render.setStyle(this.el.nativeElement, 'display', 'none')
    }
  }

  @HostBinding('attr.status') status!: string;
  @Input() set appVisible(value: string) {
    console.log(value)
    this._status = value
    switch (value) {
      case 'positive':
        this.status = 'positive'
        break;

        case 'negative':
          this.status = 'negative'
          break;

          case 'disabled':
            this.status = 'disabled'
            break;

      default:
        break;
    }
  };

}
