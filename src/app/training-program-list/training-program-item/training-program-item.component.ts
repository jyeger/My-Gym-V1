import { Component, OnInit } from '@angular/core';
import { User } from "app/shared/user.model";


@Component({
  selector: 'app-training-program-item',
  templateUrl: './training-program-item.component.html',
  styleUrls: ['./training-program-item.component.css']
})
export class TrainingProgramItemComponent implements OnInit {

  constructor() { }
  today: Date = new Date();
  currentUser:User = new User("John", "Smith","",new Date());
  
  ngOnInit() {
  }

}
