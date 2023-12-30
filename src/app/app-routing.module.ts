import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';
import { BlockComponent } from './block/block.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'esqueceu-senha',
    component: EsqueceuSenhaComponent
  },
  {
    path: 'block',
    component: BlockComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'edit/:id',
    component: EditPersonComponent
  },
  {
    path: 'login/:tipo',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
