import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TechDetailsPageRoutingModule } from './tech-details-routing.module';

import { TechDetailsPage } from './tech-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TechDetailsPageRoutingModule
  ],
  declarations: [TechDetailsPage]
})
export class TechDetailsPageModule {}
