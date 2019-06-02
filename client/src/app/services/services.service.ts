import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from "@angular/common/http";
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class Services {

  serviceURL = 'http://localhost:8080';

  constructor(
    private http: HttpClient
  ) { }

  public getUsers() {
    return this.http.get<User[]>(this.serviceURL + '/' + 'users');
  }

  public createUser(user) {
    return this.http.post<User>(this.serviceURL+ '/users/', user);
  }

  public updateUser(user) {
    return this.http.put<User>(this.serviceURL + '/users/' +  user.id, user);
  }

  public deleteUser(id: number) {
    return this.http.delete<User>(this.serviceURL + '/users/' +  id);
  }
}
