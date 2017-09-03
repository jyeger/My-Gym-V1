import { Component, OnInit,Input } from '@angular/core';
import { TrainingProgram } from '../shared/training-program.model'; 

@Component({
  selector: 'app-training-program-list',
  templateUrl: './training-program-list.component.html',
  styleUrls: ['./training-program-list.component.css']
})
export class TrainingProgramListComponent implements OnInit {
 @Input() trainingPrograms: TrainingProgram[];
 currentTrainingProgram:TrainingProgram = null;
  constructor() { }
 
  ngOnInit() {   
  }

  onEditClick(item:TrainingProgram)
  {
    this.currentTrainingProgram = item;
  }

  onDeleteClick(item:TrainingProgram)
  {

    let itemIndex = -1;
    itemIndex = this.trainingPrograms.indexOf(item);
    if (itemIndex>-1)
    {
        this.trainingPrograms.splice(itemIndex,1);
        this.currentTrainingProgram = null;
    }
  }
}
