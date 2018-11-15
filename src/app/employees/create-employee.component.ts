import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { BsDatepickerConfig }  from 'ngx-bootstrap/datepicker';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Employee } from '../models/employee.model';
import { Department } from '../models/department.model';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  previewPhoto = false;
  datePickerConfig : Partial<BsDatepickerConfig>;

  employee : Employee = {

    id: null,
    name: null,
    gender: null,
    email:null,//'?'- represent optional
    phoneNumber:null,
    contactPreference: null,
    dateOfBirth: null,
    department: null,
    isActive: null,    
    photoPath : null,


  } 
  departments : Department[] = [
  { id : 1, name : 'Help Desk', path :  'assets/images/str.jpg' },
  { id : 2, name : 'Hr', path : 'assets/images/cardio.jpg' },
  { id : 3, name : 'It', path : 'assets/images/bg3.jpg' },
  ];
  

  gender ='male';//for default
  isActive = true;//for default
  department = 3;
  constructor() { 

    this.datePickerConfig = Object.assign({}, 
      {
        containerClass: 'theme-dark-blue',
      dateInputFormat: 'DD/MM/YYYY'
    });
  }

  ngOnInit() {
  }

  togglePhotoPreview(){
    this.previewPhoto = !this.previewPhoto;
  }
  saveEmployee(newEmployee: Employee): void{
    console.log(newEmployee)
  }


}
