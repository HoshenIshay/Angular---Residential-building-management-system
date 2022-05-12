import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UsersService } from '../services/users.service';
import { IpublicMessages } from '../Interfaces/publicMessages';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-public-messages',
  templateUrl: './public-messages.component.html',
  styleUrls: ['./public-messages.component.scss']
})
export class PublicMessagesComponent implements OnInit {
  formGroup = new FormGroup({
    title: new FormControl(undefined,[Validators.required]),
    description: new FormControl(undefined,[Validators.required]),
  })
  currentUser : any
  publicMessages : IpublicMessages ={
    userName: '',
    userId : 0 ,
    title : '' ,
    description : '' ,
  }

  constructor(public dialog: MatDialog ,
    public UsersService : UsersService ,
    private toastr :ToastrService) { }

  ngOnInit(): void {
    this.currentUser = this.UsersService.getCurrentUser();
  }
  onSubmit(){
    if(this.formGroup.valid){
      const publicMessages: IpublicMessages = {
        userName  :  this.currentUser.fullname ,
        userId : this.currentUser.id,
        title : this.formGroup.value.title ,
        description: this.formGroup.value.description
      };
      console.log(publicMessages)
      this.toastr.success("Sent successfully")
      this.UsersService.postPublicMessage(publicMessages);
          this.dialog.closeAll();
    }
  }

}
