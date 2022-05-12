import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WellcomeComponent } from './wellcome/wellcome.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { UploadImgComponent } from './upload-img/upload-img.component';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { AddBuildingComponent } from './add-building/add-building.component';
import { TenantsComponent } from './tenants/tenants.component';
import { EditTenantsComponent } from './edit-tenants/edit-tenants.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ProfileComponent } from './profile/profile.component';
import { AddImgComponent } from './upload-img/add-img/add-img.component';
import { MatCardModule } from '@angular/material/card';
import { MessagesComponent } from './messages/messages.component';
import { MyMessagesComponent } from './my-messages/my-messages.component';
import { PublicMessagesComponent } from './public-messages/public-messages.component';
import { BulletinBoardComponent } from './bulletin-board/bulletin-board.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { ProblemComponent } from './problem/problem.component';
import { ReportComponent } from './report/report.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { WalletComponent } from './wallet/wallet.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { MatMenuModule } from '@angular/material/menu';
import { ToastrModule } from 'ngx-toastr';
import { TenantsListComponent } from './tenants-list/tenants-list.component';
import { FilterNamePipe } from './pipes/filter-name.pipe';
import { MyBuildingComponent } from './my-building/my-building.component';


@NgModule({
  declarations: [
    AppComponent,
    WellcomeComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    UploadImgComponent,
    AddBuildingComponent,
    TenantsComponent,
    EditTenantsComponent,
    ProfileComponent,
    AddImgComponent,
    MessagesComponent,
    MyMessagesComponent,
    PublicMessagesComponent,
    BulletinBoardComponent,
    EditProfileComponent,
    ProblemComponent,
    ReportComponent,
    ExpensesComponent,
    AddExpenseComponent,
    WalletComponent,
    UserDashboardComponent,
    TenantsListComponent,
    FilterNamePipe,
    MyBuildingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatRadioModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    ToastrModule.forRoot() ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
