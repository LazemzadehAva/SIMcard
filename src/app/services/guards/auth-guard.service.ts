import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    CanActivateChild
} from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
    providedIn: 'root'
})

export class AuthGaurd implements CanActivate {
    constructor(private router: Router, private authservice: AuthService) { }
    // tslint:disable-next-line: max-line-length
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import('@angular/router').UrlTree | import('rxjs').Observable<boolean | import('@angular/router').UrlTree> | Promise<boolean | import('@angular/router').UrlTree> {
        if (!this.authservice.isAuthenticated()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}
