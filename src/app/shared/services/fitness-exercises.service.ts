import { Injectable } from '@angular/core';
import { FitnessExercises } from "../fitness-exercises.model";
import { ExercisesType } from "../enums/exercises-type.enum";


@Injectable()
export class FitnessExercisesService {

  private fitnessExercisesList: FitnessExercises[] = [
    new FitnessExercises(1,"Pullover with dumbbells","assets/fitnessExercisesImages/Image1.png","","",ExercisesType.Back),
    new FitnessExercises(2,"Military press with dumbbells","",
    "https://www.youtube.com/embed/dQw4w9WgXcQ","",ExercisesType.Pectoralis),
    new FitnessExercises(3,"Arnold press with dumbbells","","","",ExercisesType.Shoulders),
    new FitnessExercises(4,"Sit ups","",
    "https://www.youtube.com/embed/dQw4w9WgXcQ","",ExercisesType.Abdominals),
    new FitnessExercises(5,"Preacher curls","assets/fitnessExercisesImages/Image1.png","","K3",ExercisesType.Biceps),
    new FitnessExercises(6,"Romanian Dead lift","",
    "https://www.youtube.com/embed/dQw4w9WgXcQ","",ExercisesType.Hamstring),
    new FitnessExercises(7,"Bodyweight lunge","","","",ExercisesType.Quadriceps),
    new FitnessExercises(8,"Upright cable row","assets/fitnessExercisesImages/Image1.png","","K14",ExercisesType.Trapezius),
    new FitnessExercises(9,"Triceps pushdown","",
    "https://www.youtube.com/embed/dQw4w9WgXcQ","K10",ExercisesType.Triceps),
    new FitnessExercises(10,"StairMaster","","","K7",ExercisesType.Aerobics),
    new FitnessExercises(11,"Walker","assets/fitnessExercisesImages/Image1.png",
    "https://www.youtube.com/embed/dQw4w9WgXcQ","K1",ExercisesType.Aerobics)    
  ];

  private exercisesTypeList:string[] = [
    "Back",
    "Pectoralis",
    "Shoulders",
    "Biceps",
    "Abdominals",
    "Quadriceps",
    "Trapezius",
    "Triceps",
    "Hamstring",
    "Aerobics"]

  constructor() { }

  getFitnessExercisesList():FitnessExercises[]
  {
      return this.fitnessExercisesList;
  }

  getFitnessExercisesListByType(exercisesTypeVale:number):FitnessExercises[]
  {
      return this.fitnessExercisesList.filter(exercise=>exercise.exercisesType==exercisesTypeVale);
  }

  addExerciseToList(item:FitnessExercises)
  {
    this.fitnessExercisesList.push(item);
  }

  removeExerciseFromList(item:FitnessExercises)
  {
    let itemIndex = -1;
    itemIndex = this.fitnessExercisesList.indexOf(item);
    if (itemIndex>-1)
    {
        this.fitnessExercisesList.splice(itemIndex,1);
    }
  }

  getExercisesTypeList():string[]
  {
    return this.exercisesTypeList;
  }

  getExercisesTypeListValue(value:number):string
  {
    return this.exercisesTypeList[value];
  }

  getExerciseByValue(value:number): FitnessExercises
  {
    let exersice:FitnessExercises = null;
    exersice = this.fitnessExercisesList.find(i => i.exerciseId === value);
    return exersice;
  }
}
