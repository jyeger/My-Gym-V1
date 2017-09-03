import { Component, OnInit,Input } from '@angular/core';
import { FitnessExercisesService } from 'app/shared/services/fitness-exercises.service';


@Component({
  selector: 'app-fitness-exercises-item',
  templateUrl: './fitness-exercises-item.component.html',
  styleUrls: ['./fitness-exercises-item.component.css']
})
export class FitnessExercisesItemComponent implements OnInit {

  constructor(public dataService:FitnessExercisesService) { }

  ngOnInit() {
  }

}
