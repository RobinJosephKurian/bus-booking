import { Route } from './route';
import { Seat } from './seat';

export class Bus {
    id: number;
    name: string;
    noOfSeats: number;
    route: Route;
    filledSeat: Seat[];
    farePerSeat: number;

    constructor (id: number, name: string, noOfSeats: number, route: Route, seat: Seat[], farePerSeat: number) {
        this.id = id;
        this.name = name;
        this.noOfSeats = noOfSeats;
        this.route = route;
        this.filledSeat = seat;
        this.farePerSeat = farePerSeat;
    }
}
