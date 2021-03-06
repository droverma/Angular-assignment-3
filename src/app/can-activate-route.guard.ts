import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './services/authentication.service';
import { RouterService } from './services/router.service';

@Injectable()
export class CanActivateRouteGuard implements CanActivate {

  constructor(private authService : AuthenticationService, private router:RouterService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      this.authService.isUserAuthenticated(this.authService.getBearerToken()).then(
        (flag) => {
          if (!flag) {
            this.router.routeToLogin();
            alert('Please Login First')
            return false;
          }
          return flag;
        }
      )
      return true;
  }
}
