import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DataService } from './data.service';

@Injectable()
export class GaurdrouterService implements CanActivate {

  constructor(private router: Router, private dataService: DataService) { }

  canActivate (): boolean  {
    let retVal: boolean;
    retVal = true;

    if ( !this.dataService.loggedUser ) {
      retVal = false;
      this.router.navigate(['login', 'payment']);
    }
    return retVal;
  }

}
