import { Component, OnInit } from '@angular/core';

import { PoPageDynamicEditActions, PoPageDynamicEditField } from '@po-ui/ng-templates';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {

  // PLEASE ADD THE API URL SERVICE HERE
  readonly apiService = 'https://po-sample-api.onrender.com/v1/people';

  actions: PoPageDynamicEditActions = {
    save: '/'
  }

  readonly fields: Array<PoPageDynamicEditField> = [
    { property: 'id', key: true, visible: false },
    { property: 'name', label: 'Name' },
    { property: 'genre', label: 'Genre' },
    { property: 'city', label: 'City' }
  ];

  constructor() { }

  ngOnInit() { }

}
