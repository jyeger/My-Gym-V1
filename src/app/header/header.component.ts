import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser:User = new User("John", "Smith","",new Date());
  constructor() { }

  ngOnInit() {
  }

}
