import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../../shared/service/ajax.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  getData;
  constructor( private ajaxService: AjaxService) { }

  ngOnInit() {
    this.ajaxService.getMyData().subscribe(
      succesResponse => {
        console.log(succesResponse);
        this.getData = succesResponse;
      }
    );
  }

}
