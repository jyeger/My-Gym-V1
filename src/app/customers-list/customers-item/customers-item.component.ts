import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material';

@Component({
  selector: 'app-customers-item',
  templateUrl: './customers-item.component.html',
  styleUrls: ['./customers-item.component.css']
})
export class CustomersItemComponent implements OnInit {

  constructor(public dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('en-gb');
   }
  
  ngOnInit() {
  }

}
