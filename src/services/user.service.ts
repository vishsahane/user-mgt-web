import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../classes/user';

@Injectable()
export class UserService {
  private apiUrl = 'https://user-mgt-api.herokuapp.com';

  constructor(private http: HttpClient) { }

  public getUsers() {
    return this.http.get(this.apiUrl + '/user/list');
  }
  public getUserDetails(user_id) {
    return this.http.get(this.apiUrl + '/user/' + user_id);
  }
  public saveUserDetails(user: User) {
    return this.http.post(this.apiUrl + '/user/save', user);
  }
  public deleteUserDetails(user_id) {
    return this.http.post(this.apiUrl + '/user/delete', {user_id: user_id});
  }
}
