import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DarAltaComponent } from './dar-alta/dar-alta.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactosComponent } from './contactos/contactos.component';
import { HomeComponent } from './home/home.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CervezasCardComponent } from './cervezas-card/cervezas-card.component';
import { HttpClientModule } from '@angular/common/http';
import { CervezaGetterService} from './service/cerveza-getter.service'



@NgModule({
  declarations: [
    AppComponent,
    DarAltaComponent,
    HeaderComponent,
    FooterComponent,
    ContactosComponent,
    HomeComponent,
    CervezasCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [CervezaGetterService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
