import { Component, Input, OnInit } from '@angular/core';
import { RoleType } from 'src/app/role.type';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  @Input('role') role: RoleType = 'cliente';
  @Input('nome') nome!: string;

  asc = 'botao para remover cliente';
  constructor() {}

  ngOnInit() {}
}
