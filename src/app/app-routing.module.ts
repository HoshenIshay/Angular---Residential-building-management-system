import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WellcomeComponent } from './wellcome/wellcome.component';
import { UploadImgComponent } from './upload-img/upload-img.component';
import { AddBuildingComponent } from './add-building/add-building.component';
import { TenantsComponent } from './tenants/tenants.component';
import { ProfileComponent } from './profile/profile.component';
import { MessagesComponent } from './messages/messages.component';
import { MyMessagesComponent } from './my-messages/my-messages.component';
import { BulletinBoardComponent } from './bulletin-board/bulletin-board.component';
import { ProblemComponent } from './problem/problem.component';
import { ReportComponent } from './report/report.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { WalletComponent } from './wallet/wallet.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path: '', redirectTo:'wellcome' , pathMatch:'full'},
  {path: 'wellcome', component:WellcomeComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'UploadImg', component:UploadImgComponent},
  {path: 'MyBuilding', component:AddBuildingComponent},
  {path: 'Tenants', component:TenantsComponent},
  {path: 'Profile', component:ProfileComponent},
  {path: 'Messages', component:MessagesComponent},
  {path: 'MyMessages', component:MyMessagesComponent},
  {path: 'BulletinBoard', component:BulletinBoardComponent},
  {path: 'Problem', component:ProblemComponent},
  {path: 'Report', component:ReportComponent},
  {path: 'Expenses', component:ExpensesComponent},
  {path: 'Wallet', component:WalletComponent},
  {path: 'UserDashboard', component:UserDashboardComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
