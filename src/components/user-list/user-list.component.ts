import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../classes/user';
import {MatDialog} from '@angular/material';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent  {
  users: User [];
  constructor(private userService: UserService, public dialog: MatDialog, public snackBar: MatSnackBar) {
    this.userService.getUsers().subscribe((users: User[]) => {
      console.log('Users', users);
      this.users = users;
    });
  }
  confirmDelete(user_id): void {
    const dialogRef = this.dialog.open(UserDeleteConfirmDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result) {
        this.userService.deleteUserDetails(user_id).subscribe((user: User) => {
          const snackBarRef = this.snackBar.open('User deleted successfully!', '', {
            duration: 2000,
          });
          this.users = this.users.filter((currentUser: User) => {
            return currentUser.id !== user_id;
          });
        });
      }
    });
  }
}

@Component({
  selector: 'app-user-delete-confirm-dialog',
  templateUrl: 'user-delete-confirm-dialog.html',
})
export class UserDeleteConfirmDialogComponent {
}
