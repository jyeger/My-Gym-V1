import { ExercisesType } from './Enums/exercises-type.enum'; 

export class FitnessExercises {
    public exerciseId:number;
    public name:string;
    public imagePath:string;
    public videoPath:string;
    public location:string;
    public exercisesType:ExercisesType;

    constructor(exerciseId:number,name:string, imagePath:string, videoPath:string, location:string, 
        exercisesType:ExercisesType) {
        this.exerciseId = exerciseId;
        this.name = name;
        this.imagePath = imagePath;
        this.videoPath = videoPath;
        this.location = location;
        this.exercisesType = exercisesType;
    }
}