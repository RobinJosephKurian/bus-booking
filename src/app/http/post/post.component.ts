import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../../shared/service/ajax.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  data: any;
  constructor(private ajaxService: AjaxService) { }

  ngOnInit() {
    this.ajaxService.postData().subscribe (
      data => {
        console.log(data);
        this.data = data;
      },
      err => {
        console.log(err);
      }
    );
  }

}
