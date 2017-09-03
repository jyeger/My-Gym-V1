import { Workout } from "app/shared/workout.model";

export class TrainingProgram {
    public createdOn:Date;
    public createdBy:string;
    public comments:string;
    public workouts:Workout[];
    
    constructor(createdOn:Date,createdBy:string, comments:string, workouts:Workout[]) 
    {
        this.createdOn=createdOn;   
        this.createdBy=createdBy;
        this.comments=comments;
        this.workouts=workouts;
    }

    public getTrainingProgramName():string
    {
        let yearP:number = this.createdOn.getFullYear();
        let monthP:number = this.createdOn.getMonth() + 1;
        let dayP:number = this.createdOn.getDate();
        let dateFormat:string = (dayP < 10 ? "0" : "")+dayP+"/" + (monthP < 10 ? "0" : "") + monthP + "/" + yearP;
        return "Training Program – " + dateFormat;
    }
}