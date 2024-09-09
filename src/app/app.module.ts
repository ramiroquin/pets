import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { MascotaInfoComponent } from './mascota-info/mascota-info.component';
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { ColorPickerModule } from "primeng/colorpicker";
import { FormsModule } from '@angular/forms';
import { ProgressSpinnerModule } from "primeng/progressspinner";

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    MascotaInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    ColorPickerModule,
    FormsModule,
    ProgressSpinnerModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
