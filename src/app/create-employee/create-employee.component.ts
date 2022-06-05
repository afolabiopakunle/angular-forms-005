import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employeeForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      fullName: new FormControl('', Validators.required),
      email: new FormControl(''),
      skills: new FormGroup({
        skillName: new FormControl(''),
        experienceInYears: new FormControl(''),
        proficiency: new FormControl('')
      })
    })
  }

  loadData() {
    this.employeeForm.setValue({
      fullName: 'Afolabi Opakunle',
      email: 'afolabi@gmail.com',
      skills: {
        proficiency: 'advanced',
        experienceInYears: 3,
        skillName: 'Typescript'
      }
    })
  }
  submit() {
    console.log(this.employeeForm);
  }

}
