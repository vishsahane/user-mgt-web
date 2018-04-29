
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import {MatDialogModule} from '@angular/material/dialog';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatDatepickerModule,
    MatNativeDateModule, MatDialogModule, MatMenuModule, MatIconModule, MatSnackBarModule ],
  exports: [MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatDatepickerModule,
    MatNativeDateModule , MatDialogModule, MatMenuModule, MatIconModule, MatSnackBarModule],
})
export class MaterialModule { }
