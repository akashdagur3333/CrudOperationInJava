import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class SignService {

  constructor(private http:HttpClient) { }

  public adduser(user:any){
    return this.http.post('http://localhost:8383/Exam/addUser',user);

  }

}
