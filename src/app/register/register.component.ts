import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IUser } from '../Interfaces/user.interface';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formGroup = new FormGroup({
    fullname: new FormControl(undefined,[Validators.required]),
    password: new FormControl(undefined,Validators.compose([Validators.required,Validators.minLength(4)])),
    email: new FormControl(undefined,Validators.compose([Validators.required,Validators.email])),
    phone: new FormControl(undefined,Validators.compose([Validators.required,Validators.pattern( /^((\+|00)?972\-?|0)(([23489]|[57]\d)\-?\d{7})$/)])),
    userType :new FormControl(undefined,[Validators.required]),
  });
    user: IUser = {
    fullname: '',
    password: '',
    email:'',
    phone :'',
    userType : '',
    messages: [], 
  };
  typeList = [ "Tenant" , "Management"]


  constructor(private router: Router ,
     public UsersService : UsersService ,
     private http : HttpClient ,
     private toastr :ToastrService) { }

  ngOnInit(): void {
    
  }
  onSubmit() {
    console.log(this.formGroup.value)
    if(this.formGroup.valid){
      console.log(this.formGroup.value)
      const userObj: IUser = {
        fullname  :  this.formGroup.value.fullname ,
        password :   this.formGroup.value.password ,
        email  :  this.formGroup.value.email , 
        phone :  this.formGroup.value.phone,
        userType : this.formGroup.value.userType,
        messages : []
      };
      this.UsersService.addUser(userObj) ;
      this.toastr.success("Registered successfully")
      this.UsersService.setCurrentUser(userObj)
      if(userObj.userType == 'Tenant'){
        this.router.navigate([`/dashboard`]);
      }else{
        this.router.navigate([`/MyBuilding`]);
      }
      
    }else {
      console.error('Form is not valid')
    }
    }

}
