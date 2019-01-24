import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { DxTabsModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    DxTabsModule, // SharedModule or FutureModule with imported SharedModule not working too
    BrowserModule,
    HttpClientModule,

    // Core module
    CoreModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
