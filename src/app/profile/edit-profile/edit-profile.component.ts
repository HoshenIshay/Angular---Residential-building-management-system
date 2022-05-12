import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { IUser } from 'src/app/Interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  formGroup = new FormGroup({
    fullname: new FormControl(undefined,[Validators.required]),
    email: new FormControl(undefined,Validators.compose([Validators.required,Validators.email])),
    phone: new FormControl(undefined,Validators.compose([Validators.required,Validators.pattern( /^((\+|00)?972\-?|0)(([23489]|[57]\d)\-?\d{7})$/)])),
    buildingCommittee: new FormControl(),
  });
  currentUser : any
  
  constructor(public UsersService : UsersService ,
    public dialog: MatDialog ,
    private toastr :ToastrService) { }

  ngOnInit(): void {
     this.currentUser = this.UsersService.getCurrentUser() 
     console.log(this.currentUser)
  }
  onSubmit(){
    if(this.formGroup.valid){
      const userObj: IUser = {
        fullname  :  this.formGroup.value.fullname ,
        password :   this.currentUser.password ,
        email  :  this.formGroup.value.email , 
        phone :  this.formGroup.value.phone,
        userType : this.currentUser.userType,
        messages : this.currentUser.messages
      };
      console.log(userObj)
      this.toastr.success("Edited successfully")
      this.UsersService.updateUser(userObj ,this.currentUser.id )
      this.dialog.closeAll();
    }else {
      console.error('Form is not valid')
    }
  }

}
