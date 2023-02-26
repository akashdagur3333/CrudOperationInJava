import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentServiceService {
  setter() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }
  public adddepartment(department:any){
   return this.http.post('http://localhost:8383/addDepartment',department)

  }
}
