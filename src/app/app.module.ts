import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { MaterialModule } from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { UserListComponent } from '../components/user-list/user-list.component';
import { UserDetailsComponent } from '../components/user-details/user-details.component';
import {UserDeleteConfirmDialogComponent} from '../components/user-list/user-list.component';
import { UserService } from '../services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserListComponent,
    UserDetailsComponent,
    UserDeleteConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  entryComponents:[UserDeleteConfirmDialogComponent]
})
export class AppModule { }
