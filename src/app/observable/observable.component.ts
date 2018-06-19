import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { AlertService } from '../shared/service/alert.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit, OnDestroy {

  data: Observable<string>;
  asd;
  fruitArray: string[] = [];
  testVariab;
  constructor( private alertService: AlertService) { }

  ngOnInit() {
    this.data = new Observable( observ => {
      setTimeout(() => {
        observ.next('apple');
        observ.unsubscribe();
        this.asd = observ;
      }, 1000);

      setTimeout(() => {
        observ.next('mango');
      }, 2000);
    });


  const myarray = this.data.subscribe(
      fruit => {
        this.fruitArray.push(fruit);
      }
    );
    this.testVariab = myarray;
  }

  setData() {
    this.alertService.setAlert('Successfully dispayed error message');
  }

  ngOnDestroy () {
    this.asd.unsubscribe();
    this.testVariab.unsubscribe();
  }
}
