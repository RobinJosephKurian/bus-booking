import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cod',
  templateUrl: './cod.component.html',
  styleUrls: ['./cod.component.css']
})
export class CodComponent implements OnInit {

  @Input() payableAmount;
  @Output() paymentSuccess = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  payAmount () {
    this.paymentSuccess.emit(true);
  }

}
