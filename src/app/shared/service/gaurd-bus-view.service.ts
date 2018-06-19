import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DataService } from './data.service';

@Injectable()
export class GaurdBusViewService implements CanActivate {

  constructor(private dataService: DataService, private router: Router) { }

  canActivate () {
    let retVal: boolean;
    retVal = true;
    if (this.dataService.searchedBusList.length === 0) {
      this.router.navigate(['search-bus']);
      retVal = false;
    }
    return retVal;
  }
}
