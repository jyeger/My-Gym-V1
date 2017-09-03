import { TrainingProgram } from './training-program.model'; 
import { Gender } from './Enums/gender.enum'; 

export class Customer {
    public firstName:string;
    public lastName:string;
    public imagePath:string;
    public dateOfBirth:Date;
    public memberSince:Date;
    public trainingProgram:TrainingProgram[];
    public gender:Gender;
    public address: string;
    public phone: string;

    constructor(firstName:string, lastName:string, imagePath:string, dateOfBirth:Date,
        memberSince:Date,gender:Gender,
        address:string,
        phone:string,
        trainingProgram:TrainingProgram[]) 
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.imagePath=imagePath;
        this.dateOfBirth=dateOfBirth;  
        this.memberSince=memberSince;
        this.trainingProgram = trainingProgram;
        this.gender = gender;
        this.phone = phone;
        this.address = address;
    }

    public getGender():string
    {
        let gender:string = "Unknown";
        if (this.gender==Gender.Male)
        {
            gender="Male";
        }
        if (this.gender==Gender.Female)
        {
            gender="Female";
        }
        return gender;
    }

    public getFullName():string
    {
        return this.firstName + " " + this.lastName;
    }

    public getAge():number
    {
        let mSeconds = (new Date().valueOf() - this.dateOfBirth.valueOf());
        return parseFloat((mSeconds / 31536000000).toFixed(2));  
    }
}