import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoordinatesModule } from 'projects/angular-coordinates/src/lib/coordinates.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoordinatesModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
