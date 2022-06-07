import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employeeForm!: FormGroup;

  validationMessages: any = {
    fullName: {
      required: 'Full name is required'
    },
    email: {
      required: 'Email is required'
    },
    skillName: {
      required: 'Skill name is required'
    },
    experienceInYears: {
      required: 'Experience in years is required'
    },
    proficiency: {
      required: 'Proficiency is required'
    }
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      skills: this.fb.group({
        skillName: ['', Validators.required],
        proficiency: ['', Validators.required],
        experienceInYears: ['', Validators.required]
      })
    })
    // this.employeeForm = new FormGroup({
    //   fullName: new FormControl('', Validators.required),
    //   email: new FormControl(''),
    //   skills: new FormGroup({
    //     skillName: new FormControl(''),
    //     experienceInYears: new FormControl(''),
    //     proficiency: new FormControl('')
    //   })
    // })
  }

  get fullName() {
    return this.employeeForm.get('fullName')
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

  checkErrors(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(key => {
      let abstractControl = formGroup.controls[key];
      if(abstractControl instanceof FormGroup) {
        this.checkErrors(abstractControl);
      } else {
        if(abstractControl.invalid) {
          console.log(abstractControl)
          const messages = this.validationMessages[key]
          console.log(messages)
        }
      }
    })
  }

}
