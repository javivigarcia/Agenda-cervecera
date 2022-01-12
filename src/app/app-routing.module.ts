import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ContactosComponent} from '../app/contactos/contactos.component';
import { DarAltaComponent } from './dar-alta/dar-alta.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path:'',
  component:HomeComponent,
  children:[{
    path: 'contactos',
   component: ContactosComponent,
   },
  {
    path:'alta',
    component:DarAltaComponent,
  }]
},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
