/* 3813ICT - week3 - demo */
import { Component, inject, OnInit,signal } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../model/user';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit {
private authService = inject(AuthService);
private router = inject(Router);
title = signal('Login');


email:string = "";
pwd:string = "";
errormsg = "";

ngOnInit(): void {
  console.log('test login');
    if(this.authService.isloggedin()){
      console.log('logged in user');
      this.router.navigate(['/account']);
    }
 }

 login(event:any){
  this.errormsg = "";
  event.preventDefault();
  
    this.authService.login(this.email,this.pwd).subscribe(
     {
      next:(data:any)=>{
       
         if(data.valid == true){
          this.authService.setCurrentuser(data);
          this.router.navigate(['/account']);
         }else{
          this.errormsg = "Those credentials do not match";
         }

        },
      error:(e)=>{
         
        console.log('some error happened',e); 
      },
      complete: () => console.info('complete')

     })
}

}
