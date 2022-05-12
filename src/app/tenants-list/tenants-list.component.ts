import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-tenants-list',
  templateUrl: './tenants-list.component.html',
  styleUrls: ['./tenants-list.component.scss'],
})
export class TenantsListComponent implements OnInit {
  tenants : any 
  filterString : string = ''

  constructor(public UsersService : UsersService) { }

  ngOnInit(): void {
    this.UsersService.getAllUsers().subscribe(res =>{
      this.tenants= res;
    })
  }

}
