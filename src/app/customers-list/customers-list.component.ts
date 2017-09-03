import { Component, OnInit } from '@angular/core';
import { Customer } from '../shared/customer.model';
import { TrainingProgram } from '../shared/training-program.model'; 
import { Gender } from '../shared/Enums/gender.enum'; 
import { Workout } from "app/shared/workout.model";



@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  customers:Customer[]  = [
    new Customer("John", "Dow","assets/User1.jpg",new Date(1986,10,12), new Date(2010,0,1),
    Gender.Male, "1451 5 fifth street new york","012-1234567",
    [
      new TrainingProgram(new Date(2015,6,20),"Adam","new program" ,
      [
          {exerciseId:4, numberOfSets:3, weight:15},
          {exerciseId:11, level:5, speed:11.5, time:30},
          {exerciseId:10, level:3, speed:9, time:15},
      ]
    ),
      new TrainingProgram(new Date(2016,8,10),"Adam","first program",
      [
        {exerciseId:5, numberOfSets:3, weight:10},
        {exerciseId:11, level:5, speed:9, time:30},
        {exerciseId:10, level:3, speed:3, time:15},
      ]
    )      
    ]),
    new Customer("Jane", "Dow","",new Date(1984,1,10), new Date(2013,7,7),Gender.Female,
    "1451 5 fifth street new york","012-1234567",[]),
    new Customer("Cara", "Noel","",new Date(1993,8,24), new Date(2010,7,6),Gender.Female,
    "1451 5 fifth street new york","012-1234567",[]),
    new Customer("Ziv", "Spence","assets/User2.jpg",new Date(2002,10,12), new Date(2011,8,1),
    Gender.Male,"1451 5 fifth street new york","012-1234567",
    [
      new TrainingProgram(new Date(2017,6,14),"Sharon","new program",
      [
        {exerciseId:5, numberOfSets:3, weight:15},
        {exerciseId:11, level:5, speed:11.5, time:30},
        {exerciseId:10, level:3, speed:9, time:15},
      ]
    ),
      new TrainingProgram(new Date(2014,3,9),"Sharon","first program",
      [
        {exerciseId:5, numberOfSets:3, weight:15},
        {exerciseId:11, level:5, speed:11.5, time:30},
        {exerciseId:10, level:3, speed:9, time:15},
      ])      
    ])
  ];
  sortField:string = "";
  isAscSort:boolean = null;
  currentCustomer: Customer = null;
  constructor() { }

  ngOnInit() {
  }

  onChangeCustomer(customer:Customer)
  {
    this.currentCustomer =  customer; 
  }

  onChangeSort(columnName)
  {
    if (columnName!=this.sortField)
    {
      this.sortField = columnName;
      this.isAscSort = true;
    }
    else
    {
      this.isAscSort = !this.isAscSort;
    }

    this.customers = this.customers.sort((a:Customer, b:Customer) => 
    {
        if (this.sortField=="name")
        {
          if (a.getFullName() < b.getFullName()) return -1;
          else if (a.getFullName() > b.getFullName()) return 1;
          else return 0;
        }
        else if (this.sortField=="dob")
        {
          if (a.dateOfBirth < b.dateOfBirth) return -1;
          else if (a.dateOfBirth > b.dateOfBirth) return 1;
          else return 0;
        } 
      });
      if (!this.isAscSort)
      {
        this.customers.reverse();
      }
  }

  onEditClick(item:Customer)
  {
    this.currentCustomer = item;
  }

  onDeleteClick(item:Customer)
  {

    let itemIndex = -1;
    itemIndex = this.customers.indexOf(item);
    if (itemIndex>-1)
    {
        this.customers.splice(itemIndex,1);
        this.currentCustomer = null;
    }
  }
}
