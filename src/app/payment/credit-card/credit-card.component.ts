import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {

  @Input() payableAmount;
  @Output() paymentSuccess = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  payAmount () {
    this.paymentSuccess.emit(true);
  }

}
