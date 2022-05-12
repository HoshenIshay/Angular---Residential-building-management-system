import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Imessages } from '../Interfaces/messages';
import { IUser } from '../Interfaces/user.interface';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  formGroup = new FormGroup({
    description: new FormControl(undefined,[Validators.required]),
  })
  forUser :  any
  currentUser : any
  user: IUser = {
    fullname: '',
    password: '',
    email:'',
    phone :'',
    userType :'',
    messages : []
  };
  newMessages: Imessages = {
    byUserId: 0,
    byUserName : '' ,
    forUser : 0 ,
    description : '' ,
  };

  constructor(public UsersService : UsersService , 
    public dialog: MatDialog ,
    private toastr :ToastrService) { }

  ngOnInit(): void {
    this.forUser = this.UsersService.getUserElement();
    this.currentUser = this.UsersService.getCurrentUser();
  }
  onSubmit(){
    if(this.formGroup.valid){
      const newMessages: Imessages = {
        byUserId :  this.currentUser.id ,
        byUserName : this.currentUser.fullname , 
        forUser : this.forUser.element.id,
        description: this.formGroup.value.description
      };
       this.forUser.element.messages.push(newMessages)
       const userObj : IUser = {
        fullname  :  this.forUser.element.fullname ,
        password :   this.forUser.element.password ,
        email  :  this.forUser.element.email , 
        phone :  this.forUser.element.phone,
        userType : this.forUser.element.userType,
        messages : this.forUser.element.messages
      }
      this.toastr.success("Sent successfully")
      this.UsersService.updateUser(userObj , this.forUser.element.id )
      this.dialog.closeAll();
    }
  }

}
