import { Component } from '@angular/core';
import { CarModel } from 'app/car-model';
import { CarFeatures } from 'app/car-features';
import { CarOptions } from 'app/car-options';

@Component({
  selector: 'car-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'car';
  selectedModel: CarModel;
  previewImage: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Car_pictogram.svg/2000px-Car_pictogram.svg.png';

  selectModel(event: CarModel): void {
    this.selectedModel = event;
    this.setPreview(event.image);
  }

  setPreview( url: string): void {
    this.previewImage = url;
  }
}
