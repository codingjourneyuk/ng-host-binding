import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NonRoutedComponent } from './components/non-routed.component';
import { RoutedComponent } from './components/routed.component';

@NgModule({
  declarations: [
    AppComponent,
    NonRoutedComponent,
    RoutedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
