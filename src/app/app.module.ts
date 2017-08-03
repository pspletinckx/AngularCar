import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PartsComponent } from './parts/parts.component';
import { PreviewComponent } from './preview/preview.component';
import { PresetComponent } from './preset/preset.component';
import { ModelComponent } from './model/model.component';

@NgModule({
  declarations: [
    AppComponent,
    PartsComponent,
    PreviewComponent,
    PresetComponent,
    ModelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
