import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CarModel } from 'app/car-model';

@Component({
  selector: 'car-preset',
  templateUrl: './preset.component.html',
  styleUrls: ['./preset.component.css']
})
export class PresetComponent implements OnInit {
  @Input() presets: CarModel[];
  @Output() save: EventEmitter<any>;
  @Output() onModelSelected: EventEmitter<CarModel>;

  constructor() {
    this.save = new EventEmitter<any>();
    this.onModelSelected = new EventEmitter<CarModel>();
   }

  ngOnInit() {
  }

  savePreset(): void {
    this.save.emit('save');
  }

  loadPreset(preset: CarModel): void {
    this.onModelSelected.emit(preset);
  }
}
