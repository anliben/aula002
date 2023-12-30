import { Component, OnInit } from '@angular/core';

import { PoPageAction, PoDynamicFormField } from '@po-ui/ng-components';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  readonly actions: Array<PoPageAction> = [
    { label: 'Adicionar', action: this.add.bind(this) }
  ];

  readonly filter: Array<PoDynamicFormField> = [
    { property: 'id' },
    { property: 'name' },
    { property: 'genre' },
    { property: 'city' },
  ];

  constructor() { }

  ngOnInit() { }

  add() {
    alert('ADD');
  }

}
