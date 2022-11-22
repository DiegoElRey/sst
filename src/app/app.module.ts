import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { IgxStepperModule, IgxIconModule } from 'igniteui-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { Metodologia5w2hComponent } from './metodologia_5w_2h/metodologia_5w_2h';
import { HomeComponent } from './home/home.component';
import { MetodologiaArbolComponent } from './metodologia-arbol/metodologia-arbol.component';
import { MetodologiaComponent } from './metodologia/metodologia.component';
import { AportesComponent } from './aportes/aportes.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MetodologiaArbolComponent,
    MetodologiaComponent,
    AportesComponent,
    FormsModule,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
    ]),
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxStepperModule,
    IgxIconModule,
    ReactiveFormsModule,
    FormControl,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
