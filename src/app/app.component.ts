import { Component } from '@angular/core';
import { CarModel } from 'app/car-model';

@Component({
  selector: 'car-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'car';
  selectedModel: CarModel;

  selectModel(event: CarModel): void {
    this.selectedModel = event;
  }
}
