import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WellcomeRoutingModule } from './wellcome-routing.module';
import { WellcomeComponent } from './wellcome.component';


@NgModule({
  declarations: [ WellcomeComponent],
  imports: [
    CommonModule,
    WellcomeRoutingModule
  ]
})
export class WellcomeModule { }
