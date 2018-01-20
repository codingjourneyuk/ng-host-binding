import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NonRoutedComponent } from './components/non-routed.component';
import { RoutedComponent } from './components/routed.component';

import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NonRoutedComponent,
    RoutedComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
