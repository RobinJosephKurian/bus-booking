import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bus } from '../model/bus';

import 'rxjs';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Route } from '../model/route';

@Injectable()
export class AjaxService {

  // baseURL = 'https://jsonplaceholder.typicode.com/';
  baseURL = 'http://localhost:8081/';

  constructor(private http: HttpClient) {   }

  getData () {
    return this.http.get(this.baseURL + 'posts');
  }

  getMyData () {
    // return this.http.get('https://raw.githubusercontent.com/typicode/demo/master/db.json');
    return this.http.get(this.baseURL + 'bus');
  }

  getbusData () {
    // return this.http.get('https://raw.githubusercontent.com/typicode/demo/master/db.json');
    return this.http.get(this.baseURL + 'bus')
    .do(res => {} )
    .map(res => this.convertData(res))
    .catch(this.errorHandliing);
  }

  errorHandliing (error) {
    return Observable.throw(error);
  }

  convertData (res) {
    return res.map(this.formatData);
  }

  formatData(res) {
    let tempBus: Bus;
    tempBus = new Bus(res.id,
      res.name,
      res.noOfSeat,
      new Route(res.route.id, res.route.from, res.route.to, res.route.date),
      [],
      res.price);
    return tempBus;
  }

  getSingleBus (busId) {
    return this.http.get(this.baseURL + 'bus/' + busId);
  }

  postData () {
    let obj: any;
    obj = {};
    return this.http.post(this.baseURL + 'bus', obj);
  }

  addBus (bus: Bus) {
    let requestObj: any;
    requestObj = {
      id: 4,
      name: 'BUS4',
      noOfSeat: 5,
      route: {
        id: 1,
        from: 'TVM',
        to: 'KTM',
        date: '2018-05-08',
      },
      price: 200
    };
    return this.http.post(this.baseURL + 'bus/addbus', requestObj);
  }
}
