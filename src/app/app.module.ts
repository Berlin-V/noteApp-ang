import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPComponent } from './first-p/first-p.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { SavedNotesComponent } from './saved-notes/saved-notes.component';
import { SearchFilterPipe } from './saved-notes/search-filter.pipe';
import { FormsModule } from '@angular/forms';

const routes: Routes = [

];

@NgModule({
  declarations: [
    AppComponent,
    FirstPComponent,
    HomeComponent,
    SavedNotesComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
