import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-internet-banking',
  templateUrl: './internet-banking.component.html',
  styleUrls: ['./internet-banking.component.css']
})
export class InternetBankingComponent implements OnInit {

  @Input() payableAmountChild;
  @Output() paymentSuccess = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  payAmount () {
    this.paymentSuccess.emit(false);
  }

}
