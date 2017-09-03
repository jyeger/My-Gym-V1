export class Workout {

    public exerciseId:number;
    public numberOfSets?:number;
    public weight?:number;
    public level?:number;
    public speed?:number;
    public time?:number;
    public comments?:string;

    constructor(exerciseId:number, comments?:string,numberOfSets?:number, weight?:number,level?:number,
        speed?:number, time?:number) 
    {
        this.exerciseId = exerciseId;
        this.comments = comments;
        this.numberOfSets = numberOfSets;
        this.weight = weight;
        this.level = level;
        this.speed = speed;
        this.time=time;
    }
}