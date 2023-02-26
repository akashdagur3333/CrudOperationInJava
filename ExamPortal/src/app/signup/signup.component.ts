import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SignService } from '../../app/service/sign.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
public user:any={
  username:'',
  name:'',
  father_name:'',
  email_id:'',
  password:'',



}

  constructor(private SignService:SignService,private snack: MatSnackBar){

  }

public formSubmit(){
//   var req ="is Required";
//  var n=document.getElementById("Username")?.innerHTML;
//  var p=n+" "+req;
//  n?.replace.=p;
//if(this.user.username==''||this.user.username==null){
  // alert(n);
  // let n = document.getElementById("username").innerHTML+="<p></p>";
  // this.snack.open("Field is Requires",'',{
  //   duration:1000,
  //   verticalPosition:'top',
    
  // });
//  let d = this.snack.open('Message archived', 'Undo');
//}
   //  else{
      this.SignService.adduser(this.user).subscribe(
        (data:any)=>{
          Swal.fire(
            'Good job!',
            'User id :'+data.id,
            'success',
          ).then(function(){ 
            location.reload();
            })
          
         // alert("sucess");
        },
        (error:any)=>{
          alert("Error Found");
        }
      )
    // }
   
  // console.log(this.user);
  }

}

