import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../shared/service/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name: string;
  password: string;
  returnState: string;
  @Output() loginStatus = new EventEmitter();

  constructor(
    private dataService: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public ngProgress: NgProgress) { }

  ngOnInit() {
    this.returnState = this.activatedRoute.snapshot.paramMap.get('returnState');
  }

  validateUser () {
    this.ngProgress.start();
    setTimeout( function () {
      if (this.dataService.validateUser(this.name, this.password)) {
        this.dataService.sendData(true);
        this.ngProgress.done();
        this.router.navigate([this.returnState]);
      }
    }.bind(this), 2000);
  }
}
