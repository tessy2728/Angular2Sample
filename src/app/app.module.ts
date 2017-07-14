import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClubListComponent } from './clubs/club.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { BasicComponent }  from './app.component';

const appRoutes: Routes = [{
  path: 'clubs' , component: ClubListComponent
}]

@NgModule({
  imports:      [ BrowserModule ,RouterModule.forRoot(appRoutes), HttpModule],
  declarations: [ BasicComponent, ClubListComponent ],
  bootstrap:    [ BasicComponent ]
})
export class AppModule { }
