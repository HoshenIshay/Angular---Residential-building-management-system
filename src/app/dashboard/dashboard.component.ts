import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  currentUser : any

  constructor(private router: Router , 
    public UsersService : UsersService ) { }

  ngOnInit(): void {
    this.currentUser= this.UsersService.getCurrentUser()
  }
  profile(){
    this.router.navigate([`/Profile`]);
  }

}
