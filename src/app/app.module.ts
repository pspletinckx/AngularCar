import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PartsComponent } from './parts/parts.component';
import { PreviewComponent } from './preview/preview.component';
import { PresetComponent } from './preset/preset.component';
import { ModelComponent } from './model/model.component';
import { CarModelService } from 'app/car-model.service';


@NgModule({
  declarations: [
    AppComponent,
    PartsComponent,
    PreviewComponent,
    PresetComponent,
    ModelComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    CarModelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
