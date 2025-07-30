/* 3813ICT - week3 - demo */
import { Component,signal,inject,OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-account',
  imports: [],
  templateUrl: './account.html',
  styleUrl: './account.css'
})
export class Account implements OnInit {
  private authService = inject(AuthService);
  user:User = <User>{};
  title = signal('Account Info');

ngOnInit(){
  this.user = this.authService.getCurrentuser();
}
 logout(){
  this.authService.logout();
 }
}
