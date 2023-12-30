import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[app-profile]',
})
export class ProfileDirective {
  constructor(
    public templateRef: TemplateRef<any>,
    ) {}
}
