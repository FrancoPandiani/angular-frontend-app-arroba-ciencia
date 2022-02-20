import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ContactoComponent } from './contacto/contacto.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { BienvenidaComponent } from './home/bienvenida.component';
import { EventosComponent } from './eventos/eventos.component';
import { ReservarComponent } from './reservar/reservar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioserviceService } from './Service/usuariosService/usuario.service';
import { FechasserviceService } from './Service/fechasService/fechas.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GaleriaComponent,
    ContactoComponent,
    MenuComponent,
    FooterComponent,
    BienvenidaComponent,
    EventosComponent,
    ReservarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [UsuarioserviceService, FechasserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
