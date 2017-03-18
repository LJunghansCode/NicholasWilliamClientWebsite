import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AdminService } from './admin/Admin.service';
import { ShirtService } from './shirt/Shirt.service';
import { StencilService } from './stencil/Stencil.service';
import { CookieService } from './Cookie.service';
import { Cookie } from 'ng2-cookies';

import { AppComponent } from './app.component';
import { ShirtFormComponent } from './shirt/shirt-form/shirt-form.component';
import { StencilFormComponent } from './stencil/stencil-form/stencil-form.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { ShirtListComponent } from './shirt/shirt-list/shirt-list.component';
import { HomeComponent } from './home/home.component';
import { SplashPageComponent } from './splash/splash-page/splash-page.component';
import { Ng2UploaderModule } from 'ng2-uploader';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StencilGalleryComponent } from './stencil/stencil-gallery/stencil-gallery.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';

const routes: Routes = [
  { path: 'store', component: ShirtListComponent},
  { path: 'contact', component: ContactFormComponent},
  { path: 'newShirt', component: ShirtFormComponent },
  { path: 'newStencil', component: StencilFormComponent },
  { path: 'stencilGallery', component: StencilGalleryComponent },
  { path: 'Admin', component: AdminHomeComponent },
  { path: '', redirectTo: 'store', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ShirtFormComponent,
    StencilFormComponent,
    StencilGalleryComponent,
    AdminLoginComponent,
    ShirtListComponent,
    HomeComponent,
    SplashPageComponent,
    PagenotfoundComponent,
    ContactFormComponent,
    AdminHomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [AdminService, ShirtService, StencilService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
