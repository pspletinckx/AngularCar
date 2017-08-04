import { CarOptions } from 'app/car-options';

export class CarFeatures {
    id: number;
    name: string;
    tooltip: string;
    options: CarOptions[];
    image: string;
    state: CarOptions;
}
