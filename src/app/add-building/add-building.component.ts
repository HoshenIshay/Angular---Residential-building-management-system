import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Ibuilding } from '../Interfaces/building';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-add-building',
  templateUrl: './add-building.component.html',
  styleUrls: ['./add-building.component.scss'],
})
export class AddBuildingComponent implements OnInit {
  formGroup = new FormGroup({
    address: new FormControl(undefined,[Validators.required]),
    SeveralFloors: new FormControl(undefined,[Validators.required]),
    NumberOfSApartmentsOnTheFloor: new FormControl(undefined,[Validators.required]),
  });

  constructor(public UsersService : UsersService ,
    private toastr :ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.formGroup.valid){
      console.log(this.formGroup.value)
      const newBuilding: Ibuilding = {
        address :  this.formGroup.value.address ,
        SeveralFloors : this.formGroup.value.SeveralFloors , 
        NumberOfSApartmentsOnTheFloor : this.formGroup.value.NumberOfSApartmentsOnTheFloor ,
      };
      console.log(newBuilding)
      this.toastr.success("Created successfully")
      this.UsersService.postBuilding(newBuilding )
    }else {
      console.error('Form is not valid')
    }
  }

}
