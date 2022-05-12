import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.scss'],
})
export class ProblemComponent implements OnInit {
  problems : any 
  currentUser : any

  constructor(public UsersService : UsersService) { }

  ngOnInit(): void {
    this.currentUser = this.UsersService.getCurrentUser()
    this.UsersService.getAllProblem().subscribe(res =>{
      this.problems= res;
      console.log(this.problems)
    })
  }

}
