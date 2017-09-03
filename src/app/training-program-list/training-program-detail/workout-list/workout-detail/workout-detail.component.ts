import { Component, OnInit, Input } from '@angular/core';
import { Workout } from "app/shared/workout.model";
import { FitnessExercisesService } from "app/shared/services/fitness-exercises.service";
import { FitnessExercises } from "app/shared/fitness-exercises.model";

@Component({
  selector: 'app-workout-detail',
  templateUrl: './workout-detail.component.html',
  styleUrls: ['./workout-detail.component.css']
})
export class WorkoutDetailComponent implements OnInit {
  @Input() workout:Workout;
  private exercise:FitnessExercises = null;

  constructor(public dataService:FitnessExercisesService) { }

  ngOnInit() {
    if (this.workout!=null)
      {
        this.exercise = this.dataService.getExerciseByValue(this.workout.exerciseId);
      }
  }
}
