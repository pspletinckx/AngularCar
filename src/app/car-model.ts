import { CarFeatures } from 'app/car-features';

export class CarModel {
    id: number;
    name: string;
    builder: string;
    image: string;
    features: CarFeatures[];

    constructor(obj: any) {
        this.id = obj.id || -1;
        this.name = obj.name || 'Unnamed Car';
        this.builder = obj.builder || 'Unknown builder';
        this.image = obj.image || 'http://icons.iconarchive.com/icons/iconsmind/outline/512/Car-2-icon.png';
        this.features = obj.features || [];
    }
}
