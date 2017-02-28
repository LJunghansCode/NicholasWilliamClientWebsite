import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AdminService } from './Admin.service';
import { ShirtService } from './Shirt.service';


import { AppComponent } from './app.component';
import { ShirtFormComponent } from './shirt-form/shirt-form.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ShirtUploadComponent } from './shirt-upload/shirt-upload.component';
import { ShirtListComponent } from './shirt-list/shirt-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'newShirt', component: ShirtFormComponent },
  { path: 'Admin', component: AdminLoginComponent }
];
// modularize
@NgModule({
  declarations: [
    AppComponent,
    ShirtFormComponent,
    AdminLoginComponent,
    ShirtUploadComponent,
    ShirtListComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [AdminService, ShirtService],
  bootstrap: [AppComponent]
})
export class AppModule { }
