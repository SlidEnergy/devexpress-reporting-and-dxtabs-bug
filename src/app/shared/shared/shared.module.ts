import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DxSelectBoxModule,
} from 'devextreme-angular';

@NgModule({
  exports: [
    DxSelectBoxModule
  ],
  imports: [
    CommonModule
  ],
  declarations: []
})
export class SharedModule { }
