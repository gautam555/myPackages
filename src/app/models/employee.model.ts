export class Employee{
    id: number;
    name: String;
    gender: String;
    email?:String;//'?'- represent optional
    phoneNumber?:number;
    contactPreference: String;
    dateOfBirth: Date;
    department: String;
    isActive: boolean;    
    photoPath : String;
   
  }