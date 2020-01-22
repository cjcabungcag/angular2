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


@NgModule({
  declarations: [AppComponent, ExternalComponent, ManualComponent, FormComponent,  TablelistComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
