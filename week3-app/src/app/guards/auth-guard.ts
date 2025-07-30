/* 3813ICT - week3 - demo */
/* AuthGuards protect routes based on a user authentication 
see app.routes.ts*/
import { CanActivateFn,Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
 
  if (authService.isloggedin()){
    return true;
  }else{
    router.navigate(['/']);
    return false;
  } 
};
