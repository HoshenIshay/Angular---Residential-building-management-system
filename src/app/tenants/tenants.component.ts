import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditTenantsComponent } from '../edit-tenants/edit-tenants.component';
import { IUser } from '../Interfaces/user.interface';
import { UsersService } from '../services/users.service';
import { MessagesComponent } from '../messages/messages.component';
import { PublicMessagesComponent } from '../public-messages/public-messages.component';

@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.component.html',
  styleUrls: ['./tenants.component.scss']
})
export class TenantsComponent implements OnInit {
  currentUser : any
  dataSource : any
  filterString : string = ''
  displayedColumns: string[] = ['name', 'phone' , 'edit' , 'message'];

  constructor(private http : HttpClient , 
    public UsersService : UsersService , public dialog: MatDialog) { }

  ngOnInit(): void {
    this.currentUser= this.UsersService.getCurrentUser()
    this.UsersService.getAllUsers().subscribe(res =>{
      this.dataSource= res;
    })
  }
  editTenants(element : any){
    this.UsersService.setUserElement(element)
    this.dialog.open(EditTenantsComponent , {
      data: element ,
      width : '30%' 
    });
  }
  addMessages(element : any){
    this.UsersService.setUserElement(element)
    this.dialog.open(MessagesComponent , {
      width : '30%' 
    });
  }
  sendPublicMessages(){
    this.dialog.open(PublicMessagesComponent , {
      width : '30%' 
    });
  }

}
