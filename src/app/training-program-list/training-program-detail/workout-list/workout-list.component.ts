import { Component, OnInit, Input } from '@angular/core';
import { Workout } from "app/shared/workout.model";
import { FitnessExercisesService } from "app/shared/services/fitness-exercises.service";

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent implements OnInit {

  currentWorkout:Workout = null;
  constructor(public dataService:FitnessExercisesService) { }
  @Input() workouts:Workout[];
  
  ngOnInit() {
  }

  onEditClick(item:Workout)
  {
    this.currentWorkout = item;
  }

  onDeleteClick(item:Workout)
  {

    let itemIndex = -1;
    itemIndex = this.workouts.indexOf(item);
    if (itemIndex>-1)
    {
        this.workouts.splice(itemIndex,1);
        this.currentWorkout = null;
    }
  }

}
