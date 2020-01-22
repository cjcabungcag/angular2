//magamit tanan nga modules dri kay this is the mian module

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ExternalComponent } from "./external/external.component";
import { ManualComponent } from "./manual/manual.component";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './form/form.component';
import { TablelistComponent } from './tablelist/tablelist.component';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewComponent } from './view/view.component';



const appRoutes: Routes= [
  {path:'', component: HomeComponent},
  {path:'notFound', component: ErrorComponent},
  {path:'view/:id', component: ViewComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'home', component: HomeComponent},
  {path: '**', redirectTo: '/notFound'}
];


@NgModule({
  declarations: [
    AppComponent, 
    ExternalComponent, 
    ManualComponent, 
    FormComponent,  
    TablelistComponent, 
    HomeComponent, 
    ErrorComponent,
    DashboardComponent,
    ViewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
