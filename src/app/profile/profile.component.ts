import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { ProfileDirective } from './profile.directive';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ContentChild('profile', { static: true }) profileDirective!: ProfileDirective;

  @Input('user') user: any;

  constructor() {}

  ngOnInit() {
    console.log(this.user)
  }

}
