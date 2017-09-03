import { Component, OnInit, Input } from '@angular/core';
import { Workout } from "app/shared/workout.model";

@Component({
  selector: 'app-training-program-detail',
  templateUrl: './training-program-detail.component.html',
  styleUrls: ['./training-program-detail.component.css']
})
export class TrainingProgramDetailComponent implements OnInit {
  @Input() workouts:Workout[];
  constructor() { }

  ngOnInit() {
  }

}
