import { Component, OnInit, Input } from '@angular/core';
import { CarModel } from 'app/car-model';
import { CarFeatures } from 'app/car-features'; // remove me later

@Component({
  selector: 'car-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})
export class PartsComponent implements OnInit {

@Input() carModel: CarModel;

  constructor() { }

  ngOnInit() {
    const CARFEATURES: CarFeatures[] = [
      {id: 1, name: 'Color', tooltip: '', options: [
      {id: 1, name: 'Absolute Red', tooltip: ''},
      {id: 2, name: 'Pastel Green', tooltip: ''},
      {id: 3, name: 'Limelight Green Red', tooltip: ''},
      {id: 4, name: 'Switchblade Silver', tooltip: ''},
      ] },
      {id: 2, name: 'Getinte ruiten achteraan', tooltip: '', options: [
      {id: 1, name: 'Ja', tooltip: ''},
      {id: 2, name: 'Nee', tooltip: ''},
      ] },
]

this.carModel = {id: 1, name: 'KARL', builder: 'Opel', features: CARFEATURES,
  image: 'https://opelimages.wao.zone/opelvis/images/2018A/0H/48/turn/GG2/5PF/all/00/image.jpg'}
  }

}
