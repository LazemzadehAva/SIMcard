import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
    constructor() { }

    public isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        if (token) {
            return true;
        }
        return false;
    }

    isAdmin(): boolean {
        const roles = localStorage.getItem('roles');
        if (this.isAuthenticated() && roles.includes('admin')) {
            return true;
        }
        return false;
    }
}
