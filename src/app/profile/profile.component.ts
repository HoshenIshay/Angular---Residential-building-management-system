import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersService } from '../services/users.service';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  currentUser : any 

  constructor(public UsersService : UsersService ,
    public dialog: MatDialog ) { }

  ngOnInit(): void {
    this.currentUser= this.UsersService.getCurrentUser()
  }
  onSubmit(){

  }
  editProfile(){
    this.dialog.open(EditProfileComponent , {
      width : '30%' 
    });
  }

}
