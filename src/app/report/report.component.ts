import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { Iproblem } from '../Interfaces/problem';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  formGroup = new FormGroup({
    title: new FormControl(undefined,[Validators.required]),
    description: new FormControl(undefined,[Validators.required]),
  })
  currentUser : any
  user: Iproblem = {
    userIdReports: 0,
    userNameReports: '',
    description : '' ,
    status : '' ,
    title : '' ,
  };

  constructor(public UsersService : UsersService,
    private toastr :ToastrService) { }

  ngOnInit(): void {
    this.currentUser = this.UsersService.getCurrentUser();
  }
  onSubmit(){
    if(this.formGroup.valid){
      const newproblem: Iproblem = {
        userIdReports :  this.currentUser.id ,
        userNameReports : this.currentUser.fullname , 
        description : this.formGroup.value.description,
        status: 'inTreatment' , 
        title : this.formGroup.value.title,
      };
      console.log(newproblem)
      this.toastr.success("Reported successfully")
      this.UsersService.postProblem(newproblem); 
    }
  }

}
