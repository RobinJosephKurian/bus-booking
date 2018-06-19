import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/service/data.service';
import { Route } from '../shared/model/route';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bus',
  templateUrl: './search-bus.component.html',
  styleUrls: ['./search-bus.component.css']
})
export class SearchBusComponent implements OnInit {

  from: string;
  to: string;
  date: string;

  constructor(private dataService: DataService, private router: Router) {
    this.from = 'TVM';
    this.to   = 'KTM';
    this.date = '2018-05-08';
  }

  ngOnInit() {
  }

  searchBus () {
    let searchRoute: Route;
    searchRoute = new Route(1, this.from, this.to, this.date);
    console.log(this.dataService.searchBusByRoute(searchRoute));
    this.router.navigate(['bus-view']);
  }

}
