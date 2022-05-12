import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-my-messages',
  templateUrl: './my-messages.component.html',
  styleUrls: ['./my-messages.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyMessagesComponent implements OnInit {
  currentUser : any ;
  messages : any ; 

  constructor(public UsersService : UsersService) { }

  ngOnInit(): void {
    this.currentUser = this.UsersService.getCurrentUser()
    this.messages = this.currentUser.messages
  }

}
