import { Component, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  visible: boolean = true;

  user: any = {
    nome: 'joao victor',
    idade: 34,
    pele: 'branca',
    conjungue: {
      nome: null,
      idade: null,
      pele: null
    }
  }

  getItems(event: any){
    console.log(event)
  }
}
