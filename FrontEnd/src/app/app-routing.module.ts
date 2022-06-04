import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUsuarioComponent } from './create-usuario/create-usuario.component';

const routes: Routes = [
  { path: 'adicionar', component: CreateUsuarioComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
