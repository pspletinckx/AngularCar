import { Injectable } from '@angular/core';
import { CarModel } from 'app/car-model';
import { CarFeatures } from 'app/car-features';
import { Observable } from 'rxjs/Rx';

const CARFEATURES: CarFeatures[] = [
{id: 1, name: 'Color', tooltip: '', options: [
  {id: 1, name: 'Absolute Red', tooltip: ''},
  {id: 1, name: 'Pastel Green', tooltip: ''},
  {id: 1, name: 'Limelight Green Red', tooltip: ''},
  {id: 1, name: 'Switchblade Silver', tooltip: ''},
  ] },
]

const CARMODELS: CarModel[] = [
  {id: 1, name: 'KARL', builder: 'Opel', features: CARFEATURES,
  image: 'https://opelimages.wao.zone/opelvis/images/2018A/0H/48/turn/GG2/5PF/all/00/image.jpg'},
  {id: 2, name: 'KARL ROCKS', builder: 'Opel', features: CARFEATURES,
  image: ''},
  {id: 3, name: 'ADAM JAM', builder: 'Opel', features: CARFEATURES,
  image: ''},
  {id: 4, name: 'ADAM GLAM', builder: 'Opel', features: CARFEATURES,
  image: ''},
  {id: 5, name: 'ADAM SLAM', builder: 'Opel', features: CARFEATURES,
  image: ''},
  {id: 6, name: 'ADAM UNLIMITED', builder: 'Opel', features: CARFEATURES,
  image: ''},
  {id: 7, name: 'ADAM OPEN AIR', builder: 'Opel', features: CARFEATURES,
  image: ''},
  {id: 8, name: 'ADAM S', builder: 'Opel', features: CARFEATURES,
  image: ''},
  {id: 9, name: 'ADAM ROCKS', builder: 'Opel', features: CARFEATURES,
  image: ''},
  {id: 9, name: 'ADAM ROCKS S', builder: 'Opel', features: CARFEATURES,
  image: ''},
  {id: 9, name: 'CORSA', builder: 'Opel', features: CARFEATURES,
  image: ''},
  {id: 9, name: 'CORSA 5-DEURS', builder: 'Opel', features: CARFEATURES,
  image: ''},
];


@Injectable()
export class CarModelService {

  constructor() { }

  public getCarModels(): Observable<CarModel[]> {
    return Observable.of(CARMODELS);
  }

}
