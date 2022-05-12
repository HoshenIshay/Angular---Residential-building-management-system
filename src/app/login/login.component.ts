import { HttpClient } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { IUser } from '../Interfaces/user.interface';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup = new FormGroup({
    username: new FormControl(undefined,[Validators.required]),
    password: new FormControl(undefined,Validators.compose([Validators.required,Validators.minLength(4)]))
  });
  user: IUser = {
    fullname: '',
    password: '',
    email:'',
    phone :'',
    userType :'',
    messages : []
  };


  constructor(private router: Router , 
    public UsersService : UsersService ,
    private http : HttpClient ) { }

  ngOnInit(): void {
  }

  onSubmit() {
      if(this.formGroup.valid){
        this.UsersService.getAllUsers()
       .subscribe(res=>{
        const user =  res.find((user:IUser)=>{
          return user.fullname === this.formGroup.value.username && user.password === this.formGroup.value.password 
        })
        if(user){
          this.UsersService.setCurrentUser(user)
          this.router.navigate([`/dashboard`]);
        }else {
          console.log("worng")
        }
      })
      }
    }

}
