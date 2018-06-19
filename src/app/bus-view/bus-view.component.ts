import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/service/data.service';
import { Bus } from '../shared/model/bus';
import { Seat } from '../shared/model/seat';
import { Router } from '@angular/router';
import { User } from '../shared/model/user';

@Component({
  selector: 'app-bus-view',
  templateUrl: './bus-view.component.html',
  styleUrls: ['./bus-view.component.css']
})
export class BusViewComponent implements OnInit {

  busList: Bus[];
  busSeats: Seat[];
  current: number;
  selectedSeat: number[];
  loggedUser: User;
  bookedSeat: Seat[];
  selectedCancelSeat: number[];

  constructor(private dataService: DataService, private router: Router) {
    this.current  = -1;
    this.busSeats = [];
    this.selectedSeat = [];
    this.busList    = Object.create(dataService.getSearchedBusList());
    this.loggedUser = this.dataService.loggedUser;
    this.bookedSeat = [];
    this.selectedCancelSeat = [];

    console.log(this.busList);
  }

  ngOnInit() {
  }

  showBusSeats (bus: Bus, index: number): void {
    this.busSeats = [];
    this.selectedSeat = [];
    if (this.current === index) {
      this.current = -1;
    } else {
      this.current = index;
      for (let i = 0; i < bus.noOfSeats; i++) {
        this.busSeats.push (this.getSeatDetail( bus.filledSeat, i));
      }
    }
  }

  getSeatDetail (filledSeat: Seat[], index: number): Seat {
    let tempSeat: Seat;
    let gotSeat   = false;
    for (let i = 0; i < filledSeat.length && !gotSeat; i++) {
      let seat: Seat;
      seat = filledSeat[i];
      if (seat.id === index) {
        if (seat.userId === this.loggedUser.id) {
          // seat.userId = -2;
          this.bookedSeat.push(new Seat(index, -2));
        }
        tempSeat = seat;
        gotSeat = true;
      }
    }
    if (!gotSeat) {
      tempSeat = new Seat (index, -1);
    }
    return tempSeat;
  }

  selectSeat (index) {
    if ( this.busSeats[index].userId === -2 ) {
      this.busSeats[index].userId = -1;
      this.selectedSeat = this.selectedSeat.filter( function (item) {
        return item !== index;
      });
    } else if (this.busSeats[index].userId === -1) {
      this.busSeats[index].userId = -2;
      this.selectedSeat.push(index);
    }
    console.log(this.selectedSeat);
  }

  bookTicket (bus) {
    if (this.selectedSeat.length > 0) {
      this.dataService.setSelectedBus(bus);
      this.dataService.selectedSeats = this.selectedSeat;
      this.router.navigate(['payment']);
    } else {
      alert('Please select seats');
    }
  }

  selectCancelSeat (seatNumber, index) {
    if ( this.bookedSeat[index].userId === -2) {
      this.selectedCancelSeat.push(seatNumber);
      this.bookedSeat[index].userId = -1;
    } else {
      this.bookedSeat[index].userId = -2;
      let i: number;
      i = this.selectedCancelSeat.indexOf(seatNumber);
      if (i !== -1) {
        this.selectedCancelSeat.splice(i, 1);
      }
    }
  }

  cancelTicket (bus, index) {
    if (this.dataService.cancelSeatsForUser(bus.id, this.selectedCancelSeat)) {
      this.dataService.searchedBusList = [];
      this.router.navigate(['search-bus']);
    }
  }
}
