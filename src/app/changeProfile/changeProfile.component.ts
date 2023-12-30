import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-changeProfile',
  templateUrl: './changeProfile.component.html',
  styleUrls: ['./changeProfile.component.css']
})
export class ChangeProfileComponent implements OnInit {
  @Input('template') template: TemplateRef<any> | any;
  @Input('template-context') templateContext: any;
  @Input('user') user: any;

  constructor() { }

  ngOnInit() {
  }

}
