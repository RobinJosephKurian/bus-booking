import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../shared/service/data.service';
import { Bus } from '../shared/model/bus';
import { AlertService } from '../shared/service/alert.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  paidamount: number;
  cancelledAmount: number;
  payableAmount: number;
  gst: number;
  bus: Bus;
  selectedSeat: number[];
  paymentMode: number;
  existingDetails: {cancelledseat: number, existingSeat: number};
  constructor(private router: Router, private dataService: DataService, private alertService: AlertService) {
    this.paymentMode = 1;
    this.bus    = this.dataService.getSelectedBus();
    this.existingDetails = this.dataService.getUserSeats();
    this.selectedSeat = this.dataService.selectedSeats;
    this.gst = 18;
    this.paidamount = (this.existingDetails.existingSeat + this.existingDetails.cancelledseat) * this.bus.farePerSeat;
    this.cancelledAmount = this.existingDetails.cancelledseat * this.bus.farePerSeat;
    // tslint:disable-next-line:max-line-length
    this.payableAmount = this.paidamount - this.cancelledAmount + (this.selectedSeat.length - this.existingDetails.existingSeat) * this.bus.farePerSeat;
  }

  ngOnInit() {
  }

  bookTicket (paymentSuccess) {
    if (paymentSuccess) {
      this.dataService.bookTicket();
      this.router.navigate(['search-bus']);
      this.alertService.setAlert('Successfully booked the ticket');
    } else {
      alert('Payment failed!!');
      this.alertService.setAlert('Booking Failed! Trt credit card payment');
    }
  }

}
