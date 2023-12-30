import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { HomeComponent } from './home/home.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { VendedorComponent } from './vendedor/vendedor.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangeProfileComponent } from './changeProfile/changeProfile.component';
import { EditComponent } from './edit/edit.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { LoginComponent } from './login/login.component';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';
import { BlockComponent } from './block/block.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [						
    AppComponent,
    HomeComponent,
    UsersListComponent,
      AdminComponent,
      ClientComponent,
      VendedorComponent,
      ProfileComponent,
      ChangeProfileComponent,
      EditComponent,
      EditPersonComponent,
      LoginComponent,
      EsqueceuSenhaComponent,
      BlockComponent,
      SearchComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PoModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    PoTemplatesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
