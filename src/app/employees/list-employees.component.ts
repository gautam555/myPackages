import { Component, OnInit } from '@angular/core';

import { Employee } from '../models/employee.model';

@Component({
 // selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees : Employee[] = [{
    id: 1,
   name: 'goutham',
   gender: 'male',   
   contactPreference : 'Email',
   email: '123@gmail.com',//'?'- represent optional
   dateOfBirth: new Date('10/25/1991'),
   department: 'It',
   isActive: true,
   photoPath: 'assets/images/Bg1.jpg'
  },
  {
    id: 1,
    name: 'Sourav',
    gender: 'male',   
    contactPreference : 'Email',
    email: '123@gmail.com',//'?'- represent optional
    dateOfBirth: new Date('10/25/1991'),
    department: 'It',
    isActive: true,
    photoPath: 'assets/images/cardio.jpg'
  },
 

  ]

  constructor() { }

  ngOnInit() {
  }

}
