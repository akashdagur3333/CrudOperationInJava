import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentServiceService } from 'src/app/service/department-service.service';


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit{
  departments: any;


  constructor(private http:HttpClient,private DepartmentServiceService:DepartmentServiceService){

  }
  ngOnInit(){
    let response= this.http.get("http://localhost:8383/showDepartment");
    response.subscribe((data)=>this.departments=data);  
  }


// doUpdate(department: any){
//   this.DepartmentServiceService.setter(department);

// }

}
