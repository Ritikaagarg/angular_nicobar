import { Component, OnInit } from '@angular/core';
import {JsDataService} from '../js-data.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public data: JsDataService) { }

  ngOnInit() {
  }
  jsdata:any = this.data.getdata();

}
