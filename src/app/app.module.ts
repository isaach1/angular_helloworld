import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewPageComponent } from './new-page/new-page.component';
import { RouterModule } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileUploadModule } from 'ng2-file-upload';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    NewPageComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FileUploadModule,
    MatDividerModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'new-page', component: NewPageComponent },
      { path: 'file-upload', component: FileUploadComponent }
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
