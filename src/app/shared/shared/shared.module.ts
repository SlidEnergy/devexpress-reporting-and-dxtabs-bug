import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DxTabsModule,
} from 'devextreme-angular';

@NgModule({
  exports: [
    DxTabsModule
  ],
  imports: [
    CommonModule
  ],
  declarations: []
})
export class SharedModule { }
