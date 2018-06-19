export class Route {
    id: number;
    from: string;
    to: string;
    date: string;

    constructor (id: number, from: string, to: string, date: string) {
        this.id = id;
        this.from = from;
        this.to = to;
        this.date = date;
    }
}
