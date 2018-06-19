import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Station } from '../model/station';
import { Bus } from '../model/bus';
import { Route } from '../model/route';
import { Ticket } from '../model/ticket';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Seat } from '../model/seat';
import { AjaxService } from './ajax.service';

@Injectable()
export class DataService {
  users: User[] = [
    new User (1, 'Robin', 'Robin'),
    new User (2, 'Bobin', 'Bobin'),
    new User (3, 'Sobin', 'Sobin')
  ];
  // buses: Bus[] = [
  //   new Bus(1, 'BUS1', 6, new Route(1, 'TVM', 'KTM', '2018-05-08'), [], 90),
  //   new Bus(2, 'BUS2', 7, new Route(2, 'KTM', 'TVM', '2018-05-08'), [], 100),
  //   new Bus(3, 'BUS3', 8, new Route(1, 'TVM', 'KTM', '2018-05-08'), [], 120)
  // ];
  buses: Bus[];

  searchedBusList: Bus[];
  loggedUser: User;
  ticket: Ticket;
  lastState: string;
  selectedSeats: number[];
  selectedBus: Bus;

  private subject = new Subject<any>();

  constructor(private ajaxService: AjaxService) {
    this.searchedBusList = [];
    this.selectedSeats   = [];
    ajaxService.getbusData().subscribe (
      data => {
        console.log(data);
        // this.buses = this.createBusObj(data);
        this.buses = data;
      }
    );

    ajaxService.getSingleBus(1).subscribe (
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }

  // createBusObj (response) {
  //   let tempBus: Bus[];
  //   tempBus = [];
  //   response.forEach(busItem => {
  //     tempBus.push(new Bus(busItem.id,
  //       busItem.name,
  //       busItem.noOfSeat,
  //       new Route(busItem.route.id, busItem.route.from, busItem.route.to, busItem.route.date),
  //       [],
  //       busItem.price));
  //   });
  //   return tempBus;
  // }

  validateUser (name: string, password: string) {
    let retVal = false;
    this.users.forEach(user => {
      if (user.name === name && user.password === password && retVal === false) {
        this.loggedUser = user;
        retVal = true;
      }
    });
    return retVal;
  }

  sendData(loginStatus: boolean) {
    this.subject.next(loginStatus);
  }

  getData(): Observable<any> {
    return this.subject.asObservable();
  }

  searchBusByRoute(route: Route) {
    let searchBusList: Bus[];
    searchBusList = [];
    this.buses.forEach(bus => {
      if (bus.route.from === route.from && bus.route.to === route.to && bus.route.date === route.date) {
        searchBusList.push(bus);
      }
    });
    this.searchedBusList = searchBusList;
    return searchBusList;
  }

  setSelectedBus (bus: Bus): void {
    this.selectedBus = bus;
  }

  getSelectedBus (): Bus {
    return this.selectedBus;
  }

  getSearchedBusList (): Bus[] {
    return this.searchedBusList;
  }

  bookTicket (): void {
    let gotbus = false;
    console.log(this.buses);
    for (let i = 0; i < this.buses.length && !gotbus; i++) {
      if (this.buses[i].id === this.selectedBus.id) {
        gotbus = true;
        this.removeAlreadySelectedSeats(i);
        this.selectedSeats.forEach(seatId => {
          let tempSeat: Seat;
          tempSeat = new Seat(seatId, this.loggedUser.id);
          this.buses[i].filledSeat.push(tempSeat);
        });
      }
    }
    console.log(this.buses);
  }

  removeAlreadySelectedSeats (index) {
    let currentUserId: number;
    currentUserId = this.loggedUser.id;
    this.buses[index].filledSeat = this.buses[index].filledSeat.filter(function(item) {
      return item.userId !== -2 && item.userId !== -1;
    });
    console.log(this.buses[index]);
  }

  getUserSeats (): {cancelledseat: number, existingSeat: number} {
    let userSeats: {cancelledseat: number, existingSeat: number};
    userSeats = {
      cancelledseat: 0,
      existingSeat: 0
    };
    this.selectedBus.filledSeat.forEach(seat => {
      if (seat.userId === -2) {
        userSeats.existingSeat++;
      }
      if (seat.userId === -1) {
        userSeats.cancelledseat++;
      }
    });
    return userSeats;
  }

  cancelSeatsForUser (selectedbusId, cancelSeatList): boolean {
    let gotbus = false;
    for (let i = 0; i < this.buses.length && !gotbus; i++) {
      if (this.buses[i].id === selectedbusId) {
        gotbus = true;
        cancelSeatList.forEach(seatno => {
          for (let j = 0; j < this.buses[i].filledSeat.length; j++) {
            if (seatno === this.buses[i].filledSeat[j].id) {
              this.buses[i].filledSeat.splice(j, 1);
              break;
            }
          }
        });
      }
    }
    return gotbus;
  }
}
