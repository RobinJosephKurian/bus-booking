import { Component } from '@angular/core';
import { DataService } from './shared/service/data.service';
import { User } from './shared/model/user';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;
  subscription: Subscription;
  constructor(private dataService: DataService, private router: Router) {
    this.user = this.dataService.loggedUser;
    this.subscription = this.dataService.getData()
    .subscribe(x => {
      if (x) {
        this.user = this.dataService.loggedUser;
      }
    });
  }

  loginUser () {
    console.log(this.router.url);
    this.router.navigate(['login', this.router.url.replace('/', '')]);
  }
  logoutUser () {
    this.dataService.loggedUser = null;
    this.user                   = null;
  }
  changeLoginStatus(event) {
    if (event) {
      this.user = this.dataService.loggedUser;
    }
  }
}
