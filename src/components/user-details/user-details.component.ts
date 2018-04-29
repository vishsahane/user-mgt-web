import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';
import { UserService } from '../../services/user.service';
import { User } from '../../classes/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  selectedUser: User = {id: 0, first_name: '', last_name: '', email: '', contact_number: '', dob: null};
  maxDate: Date;
  constructor(private route: ActivatedRoute, private userService: UserService,
    public snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id'] !== 'new') {
        this.userService.getUserDetails(params['id']).subscribe((user: User) => {
          this.selectedUser = user;
        });
      }

        this.maxDate = new Date();
     });
  }
  saveUser(userForm) {
    if (userForm.valid) {
      this.userService.saveUserDetails(this.selectedUser).subscribe(user => {
        const snackBarRef = this.snackBar.open('User saved successfully!', '', {
          duration: 2000,
        });
        snackBarRef.afterDismissed().subscribe(() => {
          console.log('The snack-bar was dismissed');
          this.router.navigate(['/user-list']);
        });
      });
    }
    return false;
  }

}
