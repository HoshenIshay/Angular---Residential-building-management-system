import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-my-building',
  templateUrl: './my-building.component.html',
  styleUrls: ['./my-building.component.scss']
})
export class MyBuildingComponent implements OnInit {

  constructor(public UsersService : UsersService) { }
  buildings : any

  ngOnInit(): void {
    this.UsersService.getAllBuilding().subscribe(res =>{
      this.buildings = res ; 
    })
  }

}
