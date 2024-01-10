import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecoverPageRoutingModule } from './recover-pass-routing.module';

import { RecoverPage } from './recover-pass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecoverPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RecoverPage]
})
export class RecoverPageModule {}
