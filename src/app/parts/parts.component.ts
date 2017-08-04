import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CarModel } from 'app/car-model';
import { CarFeatures } from 'app/car-features'; // remove me later
import { CarOptions } from 'app/car-options';
import { CarModelService } from 'app/car-model.service';

@Component({
  selector: 'car-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})
export class PartsComponent implements OnInit {

@Input() carModel: CarModel;
@Output() preview: EventEmitter <string>;

  constructor(private service: CarModelService) {
    this.preview = new EventEmitter <string>();
  }

  ngOnInit() {
    this.service.getCarModels().subscribe(
      (carmodels: CarModel[]) => {this.carModel = carmodels[0]; }
    );

  }

  hoverFeature(feature: CarFeatures): void {
    if (feature.image.length > 5) { // if its filled at least
      this.preview.emit(feature.image);
    }
  }
  hoverOption(option: CarOptions): void {
    if (option.image.length > 5) {
      this.preview.emit(option.image);
    }
  }

}
