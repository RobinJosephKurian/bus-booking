import { Component, OnInit } from '@angular/core';
import { AlertService } from '../shared/service/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  errorMessage: string;
  constructor( private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.getAlert().subscribe(
      msg => {
        this.errorMessage = msg;
        setTimeout(
          () => {
            this.errorMessage = '';
          }, 2000);
      }
    );
  }

}
