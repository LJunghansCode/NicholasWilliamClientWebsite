import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { ShirtFormComponent } from './shirt-form/shirt-form.component';
const routes: Routes = [
  {path: 'newShirt', component: ShirtFormComponent}
];
// modularize

@NgModule({
  declarations: [
    AppComponent,
    ShirtFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
