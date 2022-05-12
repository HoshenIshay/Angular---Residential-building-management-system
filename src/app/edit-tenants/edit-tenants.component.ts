import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../Interfaces/user.interface';
import { UsersService } from '../services/users.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-tenants',
  templateUrl: './edit-tenants.component.html',
  styleUrls: ['./edit-tenants.component.scss']
})
export class EditTenantsComponent implements OnInit {
  userElement : any ; 
  formGroup = new FormGroup({
    fullname: new FormControl(undefined,[Validators.required]),
    email: new FormControl(undefined,Validators.compose([Validators.required,Validators.email])),
    phone: new FormControl(undefined,Validators.compose([Validators.required,Validators.pattern( /^((\+|00)?972\-?|0)(([23489]|[57]\d)\-?\d{7})$/)])),
    buildingCommittee: new FormControl(),
  });
    user: IUser = {
    fullname: '',
    password: '',
    email:'',
    phone :'',
    userType :'',
    messages : []
  };

  constructor(public UsersService : UsersService , 
    public dialog: MatDialog ,
    private toastr :ToastrService) { }

  ngOnInit(): void {
    this.userElement = this.UsersService.getUserElement()  
  }
  onSubmit() {
    if(this.formGroup.valid){
      const userObj: IUser = {
        fullname  :  this.formGroup.value.fullname ,
        password :   this.userElement.element.password ,
        email  :  this.formGroup.value.email , 
        phone :  this.formGroup.value.phone,
        userType : this.userElement.element.userType,
        messages : this.userElement.element.messages
      };
      console.log(userObj)
      this.dialog.closeAll();
      this.toastr.success("Edited successfully")
      this.UsersService.updateUser(userObj ,this.userElement.element.id )
    }else {
      console.error('Form is not valid')
    }
    }

}
