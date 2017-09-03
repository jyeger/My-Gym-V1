import { Component, OnInit } from '@angular/core';
import { FitnessExercisesService } from "app/shared/services/fitness-exercises.service";
import { FitnessExercises } from "app/shared/fitness-exercises.model";

@Component({
  selector: 'app-workout-item',
  templateUrl: './workout-item.component.html',
  styleUrls: ['./workout-item.component.css']
})
export class WorkoutItemComponent implements OnInit {

  constructor(public dataService:FitnessExercisesService) { }
  
  filteredExercises:FitnessExercises[];
  
  ngOnInit() {
    this.filteredExercises = this.dataService.getFitnessExercisesListByType(1);
  }

  onCategoryChange(catValue)
  {
    this.filteredExercises = this.dataService.getFitnessExercisesListByType(catValue.target.value);
  }
}
