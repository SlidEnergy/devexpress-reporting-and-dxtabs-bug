import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report/report.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared/shared.module';
import { DxReportViewerModule } from 'devexpress-reporting-angular';

const routes: Routes = [
  {
    path: "",
    component: ReportComponent,
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    DxReportViewerModule
  ],
  exports: [
    RouterModule,
    ReportComponent
  ],
  declarations: [ReportComponent]
})
export class ReportModule { }
