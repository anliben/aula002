import { ActivatedRoute } from '@angular/router';
import { Component, Renderer2, OnInit } from '@angular/core';
import { PoPageDynamicTableActions } from '@po-ui/ng-templates';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  readonly joao: PoPageDynamicTableActions = {
    edit: '/edit/:id',
  };

  readonly fields: Array<any> = [
    { property: 'id', key: true, visible: false },
    { property: 'name', label: 'Name' },
    { property: 'genre', label: 'Genre', sortable: false },
    { property: 'city', label: 'City' }
  ]

  edits(event: any) {
    console.log(event)
  }

}
