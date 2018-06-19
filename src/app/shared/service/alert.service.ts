import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alertMessage = new Subject<string>();
  constructor() { }

  setAlert(msg) {
    this.alertMessage.next(msg);
  }

  getAlert() {
    return this.alertMessage.asObservable();
  }
}
