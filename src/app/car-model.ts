import { CarFeatures } from 'app/car-features';

export class CarModel {
    id: number;
    name: string;
    builder: string;
    image: string;
    features: CarFeatures[];
}
