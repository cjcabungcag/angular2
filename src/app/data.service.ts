import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { User } from "./user.model";

@Injectable()
export class DataService {
  apiUrl = "https://jsonplaceholder.typicode.com/users";

  constructor(private _http: HttpClient) {}

  getUsers(): Observable<any> {
    return this._http.get<User[]>(this.apiUrl);
  }

  addUser(newUser: User[]): Observable<User[]> {
    return this._http.post<User[]>(this.apiUrl, newUser)
  }
}
