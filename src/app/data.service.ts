import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "./user.model";


const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': 'my-auth-token'
  })
  };
  

@Injectable()
export class DataService {
  apiUrl = "https://jsonplaceholder.typicode.com/users";

  constructor(private _http: HttpClient) {}

  getUsers(): Observable<any> {
    return this._http.get<User[]>(this.apiUrl);
  }

  addUser(newUser: User): Observable<User> {
    return this._http.post<User>(this.apiUrl, newUser, httpOptions);
  }

  editUser(user: User, id: any): Observable<any> {
    return this._http.put<any>(`${this.apiUrl}/${id}`, user,httpOptions)
  }

  deleteUser(id: any): Observable<any> {
    return this._http.delete<any>(`${this.apiUrl}/${id}`,httpOptions)
  }

}
