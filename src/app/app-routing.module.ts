import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './home/bienvenida.component';
import { ContactoComponent } from './contacto/contacto.component';
import { EventosComponent } from './eventos/eventos.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ReservarComponent } from './reservar/reservar.component';

const routes: Routes = [
  { path: 'galeria', component: GaleriaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'reservar', component: ReservarComponent },
  { path: 'bienvenida', component: BienvenidaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'bienvenida' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
