export class User {
    public firstName:string;
    public lastName:string;
    public imagePath:string;
    public lastLogin:Date;
        
    constructor(firstName:string, lastName:string, imagePath:string, lastLogin:Date) 
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.imagePath=imagePath;
        this.lastLogin=lastLogin;   
    }

    public getFullName():string
    {
        return this.firstName + " " + this.lastName;
    }
}