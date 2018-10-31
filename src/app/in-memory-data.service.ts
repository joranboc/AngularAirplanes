import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Plane } from './plane';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const planes = [
            { id: 11, name: 'Boeing 787-8' },
            { id: 12, name: 'Boeing 737-9' },
            { id: 13, name: 'Boeing 777-300' },
            { id: 14, name: 'Boeing 747-800' },
            { id: 15, name: 'Boeing 767' },
            { id: 16, name: 'Airbus 320neo' },
            { id: 17, name: 'Airbus A380-800' },
            { id: 18, name: 'Airbus A350-800' },
            { id: 19, name: 'Airbus A320-300' },
            { id: 20, name: 'Airbus A340-300' }

        ];
        return { planes };
    }

    // Overrides the genId method to ensure that a hero always has an id.
    // If the planes array is empty,
    // the method below returns the initial number (11).
    // if the planes array is not empty, the method below returns the highest
    // plane id + 1.
    genId(planes: Plane[]): number {
        return planes.length > 0 ? Math.max(...planes.map(plane => plane.id)) + 1 : 11;
    }
}