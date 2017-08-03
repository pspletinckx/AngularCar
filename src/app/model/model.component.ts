import { Component, OnInit } from '@angular/core';
import { CarModelService } from 'app/car-model.service';
import { CarModel } from 'app/car-model';

@Component({
  selector: 'car-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
  models: CarModel[];

  getModels(): void {
    this.service.getCarModels().subscribe(
      (carmodels: CarModel[]) => {this.models = carmodels.slice(0,4); }
    );
  }

  constructor( private service: CarModelService) { }

  ngOnInit() {
    this.getModels();
  }

}
