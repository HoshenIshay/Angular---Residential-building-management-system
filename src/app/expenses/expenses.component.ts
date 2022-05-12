import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersService } from '../services/users.service';
import { AddExpenseComponent } from '../add-expense/add-expense.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {
  expenses : any
  currentUser : any

  constructor(public UsersService : UsersService ,
    public dialog: MatDialog ,) { }

  ngOnInit(): void {
    this.currentUser = this.UsersService.getCurrentUser()
    this.UsersService.getAllexpenses().subscribe(res =>{
      this.expenses= res;
      console.log(this.expenses)
    })
  }
  addExpense(){
    this.dialog.open(AddExpenseComponent , {
      width : '30%' 
    });
  }

}
