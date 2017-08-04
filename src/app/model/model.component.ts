import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CarModelService } from 'app/car-model.service';
import { CarModel } from 'app/car-model';

@Component({
  selector: 'car-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
  models: CarModel[];
  @Output() onModelSelected: EventEmitter<CarModel>;

  getModels(): void {
    this.service.getCarModels().subscribe(
      (carmodels: CarModel[]) => {this.models = carmodels; }
    );
  }
  selectModel(model: CarModel): void {
    this.onModelSelected.emit(model);
  }

  constructor( private service: CarModelService) {
    this.onModelSelected = new EventEmitter<CarModel>();
   }

  ngOnInit() {
    this.getModels();
  }

}
