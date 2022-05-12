import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WellcomeComponent } from './wellcome.component';


const routes: Routes = [
  {path: '', component: WellcomeComponent},
  {path: '', redirectTo:'wellcome' , pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WellcomeRoutingModule { }
