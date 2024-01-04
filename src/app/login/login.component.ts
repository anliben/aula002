import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private _status!: string;

  @Input('status') set status(value: string) {
    this._status = value;
  }

  get status(): string {
    return this._status
  }

  constructor() { }

  ngOnInit() { }

}
