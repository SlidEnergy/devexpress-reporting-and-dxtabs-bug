import { NgModule } from '@angular/core';
import { FeatureComponent } from './feature/feature.component';
import { SharedModule } from '../shared/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: FeatureComponent,
  }
];

@NgModule({
  declarations: [FeatureComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class FeatureModule { }
