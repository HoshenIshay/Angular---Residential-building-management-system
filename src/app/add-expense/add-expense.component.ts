import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Iexpenses } from '../Interfaces/expenses';
import { UsersService } from '../services/users.service';
import { Iwallet } from '../Interfaces/wallet';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss']
})
export class AddExpenseComponent implements OnInit {
  formGroup = new FormGroup({
    price: new FormControl(undefined,[Validators.required]),
    description: new FormControl(undefined,[Validators.required]),
    expenseType: new FormControl(undefined,[Validators.required]),
  })
  expense: Iexpenses = {
    price: 0 ,
    description : '' ,
    expenseType : '' ,
  };
  typeList = [ "Gardening" , "Cleanliness" , "Other"]
  wallet : any
  walletObj : any

  constructor(public UsersService : UsersService , 
    public dialog: MatDialog ,
    private toastr :ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.formGroup.valid){
      const newExpense: Iexpenses = {
        price :  this.formGroup.value.price ,
        description : this.formGroup.value.description , 
        expenseType : this.formGroup.value.expenseType ,
      };
      this.toastr.success("Added successfully")
      this.UsersService.postexpense(newExpense);
      this.UsersService.getWallet().subscribe(res =>{
        this.wallet= res;
      })
      const newTotal = this.wallet.total - this.formGroup.value.price
      const walletObj: Iwallet = {
        total :  newTotal  ,
      };
      this.UsersService.updateWallet(walletObj )
      this.dialog.closeAll(); 
    }
  }

}
