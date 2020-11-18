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

    logIn(model): boolean {
        if (model.username === 'admin' && model.password === 'admin') {
            localStorage.setItem('token', 'xxx');
            localStorage.setItem('roles', 'admin');
            localStorage.setItem('name', 'ادمین');
            return true;
        } else if (model.username === 'guest' && model.password === 'guest') {
            localStorage.setItem('token', 'xxx');
            localStorage.setItem('roles', 'public');
            localStorage.setItem('name', 'کاربر');
            return true;
        }
        return false;
    }
}
