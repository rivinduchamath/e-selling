import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthService } from './auth.service';
import { Router, ParamMap } from '@angular/router';
 import 'rxjs/add/operator/map';

// import { User } from 'firebase';
// import { ajax } from 'rxjs/ajax';
// import { map, retry, catchError } from 'rxjs/operators';
// import { map } from 'rxjs/operators';
@Injectable()
export class AuthGuardService implements CanActivate{
  path: import("@angular/router").ActivatedRouteSnapshot[];
  route: import("@angular/router").ActivatedRouteSnapshot;

  constructor(private auth:AuthService,private router :Router) { }
  canActivate(){
return this.auth.user$.map( user => {
if(user) return true;

this.router.navigate(['/login']);
return false;
});
  } 
}
