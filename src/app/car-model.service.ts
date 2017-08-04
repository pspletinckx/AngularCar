import { Injectable } from '@angular/core';
import { CarModel } from 'app/car-model';
import { CarFeatures } from 'app/car-features';
import { Observable } from 'rxjs/Rx';
// tslint:disable:max-line-length
const CARFEATURES: CarFeatures[] = [
    {id: 1, name: 'Color', tooltip: '', image: '',
    state: {id: 1, name: 'Absolute Red', tooltip: '', image: 'https://opelimages.wao.zone/opelvis/images/2018A/0H/48/turn/GG2/P05/all/00/image.jpg'},
    options: [
      {id: 1, name: 'Absolute Red', tooltip: '', image: 'https://opelimages.wao.zone/opelvis/images/2018A/0H/48/turn/GG2/P05/all/00/image.jpg'},
      {id: 2, name: 'Pastel Green', tooltip: '', image: 'https://opelimages.wao.zone/opelvis/images/2018A/0H/48/turn/GP9/P05/all/00/image.jpg'},
      {id: 3, name: 'Limelight Green', tooltip: '', image: 'https://opelimages.wao.zone/opelvis/images/2018A/0H/48/turn/GN6/P05/all/00/image.jpg'},
      {id: 4, name: 'Switchblade Silver', tooltip: '', image: 'https://opelimages.wao.zone/opelvis/images/2018A/0H/48/turn/GAN/P05/all/00/image.jpg'},
  ] },
    {id: 2, name: 'Velgen', tooltip: '', image: '',
    state:  {id: 1, name: '16" Licht metalen velgen', tooltip: '6.0J x 16 ', image: '/assets/images/karl/velgen/weel1.jpg'},
    options: [
      {id: 1, name: '16" Licht metalen velgen', tooltip: '6.0J x 16 ', image: '/assets/images/karl/velgen/weel1.jpg'},
      {id: 2, name: '15" Alloy wheel', tooltip: '', image: '/assets/images/karl/velgen/weel2.jpg'},
      {id: 3, name: 'Wieldeksel design-velg', tooltip: '', image: '/assets/images/karl/velgen/weel3.jpg'},
      {id: 4, name: 'Stalen velgen', tooltip: '', image: '/assets/images/karl/velgen/weel4.jpg'},
  ] },

]
const CARFEATURES2: CarFeatures[] = [
  {id: 1, name: 'Color', tooltip: '', image: '',
    state: {id: 1, name: 'Absolute Red', tooltip: '', image: ''},
    options: [
    {id: 1, name: 'Absolute Red', tooltip: '', image: ''},
    {id: 1, name: 'Pastel Green', tooltip: '', image: ''},
    {id: 1, name: 'Limelight Green Red', tooltip: '', image: ''},
    {id: 1, name: 'Switchblade Silver', tooltip: '', image: ''},
  ] },
  {id: 2, name: 'Getinte ruiten achteraan', tooltip: '', image: '',
  state: {id: 1, name: 'Ja', tooltip: '', image: ''},
  options: [
      {id: 1, name: 'Ja', tooltip: '', image: ''},
      {id: 2, name: 'Nee', tooltip: '', image: ''},
      ] },
]
const CARFEATURES3: CarFeatures[] = [
  {id: 1, name: 'Color', tooltip: '', image: '',
  state: {id: 1, name: 'Absolute Red', tooltip: '', image: ''},
   options: [
    {id: 1, name: 'Absolute Red', tooltip: '', image: ''},
    {id: 1, name: 'Pastel Green', tooltip: '', image: ''},
    {id: 1, name: 'Limelight Green Red', tooltip: '', image: ''},
    {id: 1, name: 'Switchblade Silver', tooltip: '', image: ''},
  ] },
  {id: 2, name: 'Getinte ruiten achteraan', tooltip: '', image: '',
  state:
  {id: 1, name: 'Ja', tooltip: '', image: ''}, options: [
      {id: 1, name: 'Ja', tooltip: '', image: ''},
      {id: 2, name: 'Nee', tooltip: '', image: ''},
      ] },
]

const CARMODELS: CarModel[] = [
  {id: 1, name: 'KARL', builder: 'Opel', features: CARFEATURES,
  image: 'https://opelimages.wao.zone/opelvis/images/2018A/0H/48/turn/GG2/5PF/all/00/image.jpg'},
  {id: 2, name: 'KARL ROCKS', builder: 'Opel', features: CARFEATURES2,
  image: '/assets/images/karlrocks/image.jpg'},
  {id: 3, name: 'ADAM JAM', builder: 'Opel', features: CARFEATURES,
  image: '/assets/images/adamjam/image.jpg'},
  {id: 4, name: 'ADAM GLAM', builder: 'Opel', features: CARFEATURES,
  image: 'https://opelimages.wao.zone/opelvis/images/2018A/0H/48/turn/GG2/5PF/all/00/image.jpg'},
  {id: 5, name: 'ADAM SLAM', builder: 'Opel', features: CARFEATURES,
  image: 'https://opelimages.wao.zone/opelvis/images/2018A/0H/48/turn/GG2/5PF/all/00/image.jpg'},
  {id: 6, name: 'ADAM UNLIMITED', builder: 'Opel', features: CARFEATURES,
  image: 'https://opelimages.wao.zone/opelvis/images/2018A/0H/48/turn/GG2/5PF/all/00/image.jpg'},
  {id: 7, name: 'ADAM OPEN AIR', builder: 'Opel', features: CARFEATURES,
  image: 'https://opelimages.wao.zone/opelvis/images/2018A/0H/48/turn/GG2/5PF/all/00/image.jpg'},
  {id: 8, name: 'ADAM S', builder: 'Opel', features: CARFEATURES,
  image: 'https://opelimages.wao.zone/opelvis/images/2018A/0H/48/turn/GG2/5PF/all/00/image.jpg'},
  {id: 9, name: 'ADAM ROCKS', builder: 'Opel', features: CARFEATURES,
  image: 'https://opelimages.wao.zone/opelvis/images/2018A/0H/48/turn/GG2/5PF/all/00/image.jpg'},
  {id: 9, name: 'ADAM ROCKS S', builder: 'Opel', features: CARFEATURES,
  image: 'https://opelimages.wao.zone/opelvis/images/2018A/0H/48/turn/GG2/5PF/all/00/image.jpg'},
  {id: 9, name: 'CORSA', builder: 'Opel', features: CARFEATURES,
  image: 'https://opelimages.wao.zone/opelvis/images/2018A/0H/48/turn/GG2/5PF/all/00/image.jpg'},
  {id: 9, name: 'CORSA 5-DEURS', builder: 'Opel', features: CARFEATURES,
  image: 'https://opelimages.wao.zone/opelvis/images/2018A/0H/48/turn/GG2/5PF/all/00/image.jpg'},
];


@Injectable()
export class CarModelService {

  constructor() { }

  public getCarModels(): Observable<CarModel[]> {
    return Observable.of(CARMODELS);
  }

}
