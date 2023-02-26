import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DepartmentServiceService } from 'src/app/service/department-service.service';
import Swal from 'sweetalert2';
import { FormsModule,FormControl, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-department-modal',
  templateUrl: './department-modal.component.html',
  styleUrls: ['./department-modal.component.css']
})
export class DepartmentModalComponent implements OnInit{


  // public departmentform!: FormGroup;

  public department:any={
    department_name:''

  }

constructor(private DepartmentServiceService:DepartmentServiceService,private snack: MatSnackBar){

}

ngOnInit(){
  // this.departmentform = this.fb.group({

  //   id: [''],

  //   department_name: ['']

  // });
    
}
public submitDepartment(){
// console.log(a);

// var a=akash.getAttribute("ng-reflect-model");
// console.log(akash.getAttribute("ng-reflect-model"));
  this.DepartmentServiceService.adddepartment(this.department).subscribe(
    (data:any)=>{
      Swal.fire(
        'Good job!',
        'Department id :'+data.id,
        'success',
      ).then(function(){
        // var akash=document.getElementById("department_name");
        // akash?.setAttribute("ng-reflect-model","null");
        // akash?.getAttribute("ng-reflect-model");
        // const form = new FormControl('department');
        //   form.reset();
      location.reload();
        })

    },
    (error:any)=>{

    }
  )

}

}
