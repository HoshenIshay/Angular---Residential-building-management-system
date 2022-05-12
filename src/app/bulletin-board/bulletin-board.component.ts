import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { IpublicMessages } from '../Interfaces/publicMessages';

@Component({
  selector: 'app-bulletin-board',
  templateUrl: './bulletin-board.component.html',
  styleUrls: ['./bulletin-board.component.scss'] ,
})
export class BulletinBoardComponent implements OnInit {
  publicMessages : any

  constructor(public UsersService : UsersService) { }

  ngOnInit(): void {
    this.UsersService.getPublicMessages().subscribe(res =>{
      this.publicMessages= res;
      console.log(this.publicMessages)
    })
  }

}
