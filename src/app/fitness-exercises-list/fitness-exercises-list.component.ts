import { Component, OnInit } from '@angular/core';
import { FitnessExercisesService } from '../shared/services/fitness-exercises.service';
import { FitnessExercises } from "app/shared/fitness-exercises.model";


@Component({
  selector: 'app-fitness-exercises-list',
  templateUrl: './fitness-exercises-list.component.html',
  styleUrls: ['./fitness-exercises-list.component.css']
})
export class FitnessExercisesListComponent implements OnInit {
  currentExercise:FitnessExercises = null;
  
  constructor(public dataService:FitnessExercisesService)
  {
  }
  ngOnInit() {
  }

  onEditClick(item:FitnessExercises)
  {
    this.currentExercise = item;
  }

  onDeleteClick(item:FitnessExercises)
  {
    this.dataService.removeExerciseFromList(item);
  }
}
